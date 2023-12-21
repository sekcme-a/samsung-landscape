import { CircularProgress, Grid } from "@mui/material"
import Type from "src/article/Type"
import PageHeader from "../../src/public/PageHeader"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import useData from "context/data"
import AnnouncementCompo from "src/article/Announcement"

const Article = () => {
  const router = useRouter()
  const {type} = router.query
  const [typeText, setTypeText] = useState("")
  const {data, fetch_data,thumbnailsList, fetch_thumbnails_list} = useData()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
      if(!data.article.fetched) fetch_data("article")
  },[])

  useEffect(()=> {
    const fetchData = async () => {
      if(type && thumbnailsList[type]) setIsLoading(false)
      else if (type) {
        await fetch_thumbnails_list(type)
        setIsLoading(false)
      }
    }
    fetchData()
  },[type])

  useEffect(() =>{
    if(type==="all")
      setTypeText("전체실적")
    else if(type==="construction")
      setTypeText("시공/관리")
    else if(type==="plan")
      setTypeText("계획/설계")
  },[type])


  return(
    <>
      <PageHeader main="사업실적" sub={typeText} type="article" item={`${type}_header_title`} />

      {isLoading ? <div style={{width:"100vw", marginTop:'100px',marginBottom:"100px",  display:"flex", justifyContent:"center"}}><CircularProgress /></div> : 
        // type==="announcement" ?
        //   <AnnouncementCompo list={thumbnailsList[type]}/> 
        //   :
          <Type list={thumbnailsList[type]} {...{type, typeText}}/>}
      <div style={{marginBottom:"100px"}}></div>
    </>
  )
}

export default Article