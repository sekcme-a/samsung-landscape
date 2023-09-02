import { createContext, useState, useEffect, useContext } from "react";
import { firestore as db } from "firebase/firebase";
import { useRouter } from "next/router";

const dataContext = createContext()

export default function useData(){
    return useContext(dataContext)
}

export function DataProvider(props){
  const [isEditMode, setIsEditMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({
    main: {fetched: false,},
    footer: {fetched: false,},
    greet: {fetched: false,},
    business: {fetched: false},
    history: {fetched: false},
    organization: {fetched: false},
    map: {fetched: false},
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

  useEffect(()=>{

  },[])

  const fetch_data = async (type) => {
    setIsLoading(true)
    const doc = await db.collection("data").doc(type).get()
    if(doc.exists){
      setData(prevData => ({
        ...prevData,
        [type]: {
          ...doc.data(),
          fetched: true
        }
      }))
    }
    setIsLoading(false)
  }



  const value = {
    isEditMode, setIsEditMode,
    data, setData, handleData,
    fetch_data,
    isLoading
  }

  return <dataContext.Provider value={value} {...props} />
}