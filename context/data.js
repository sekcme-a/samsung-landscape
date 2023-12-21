import { createContext, useState, useEffect, useContext } from "react";
import { firestore as db } from "firebase/firebase";
import { useRouter } from "next/router";

const dataContext = createContext()

export default function useData(){
    return useContext(dataContext)
}

export function DataProvider(props){
  const [isEditMode, setIsEditMode] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({
    main: {fetched: false,},
    info: {fetched: false},
    footer: {fetched: false},
    business: {fetched:false},
    article: {fetched:false},
  })
  const handleData = (type, data) => {
    setData(prevData => ({
      ...prevData, 
      [type]: {
        ...prevData[type],
        ...data
      }
    })) 
  }

  const [thumbnailsList, setThumbnailsList] = useState({})
  const fetch_thumbnails_list = async (type) => {
    const query = await db.collection("team").doc("samsung").collection("posts").where("condition", "==", "게제중").where("type","==",type).orderBy("publishedAt", "desc").get()
    const list = query.docs.map(doc=>({...doc.data(), id: doc.id}))
    setThumbnailsList(prevList => ({...prevList, [type]: list}))
  }


  const[postsList, setPostsList] = useState({})
  const fetch_post = async (postId) => {
    const doc = await db.collection("team").doc("samsung").collection("posts").doc(postId).get()
    if (doc.exists) {
      console.log(doc.data())
      setPostsList(prevList => ({
        ...prevList,
        [postId] : doc.data()
      }))
      return true
    } else return false //해당 id를 가진 post없음.
  }

  const fetch_data = async (type) => {
    setIsLoading(true)
    const doc = await db.collection("samsung").doc(type).get()
    if(doc.exists){
      setData(prevData => ({
        ...prevData,
        [type]: {
          ...doc.data(),
          fetched: true
        }
      }))
    }
    //footer 는 공통적으로 들어가니까 footer fetched: false 면 fetch
    if(!data.footer.fetched){
      const footerDoc = await db.collection("samsung").doc("footer").get()
      if(footerDoc.exists){
        setData(prevData => ({
          ...prevData,
          footer: {
            ...footerDoc.data(),
            fetched: true
          }
        }))
      }
    }
    setIsLoading(false)
  }



  const value = {
    isEditMode, setIsEditMode,
    data, setData, handleData,
    fetch_data,
    thumbnailsList, fetch_thumbnails_list,
    isLoading,
    postsList, fetch_post,
  }

  return <dataContext.Provider value={value} {...props} />
}