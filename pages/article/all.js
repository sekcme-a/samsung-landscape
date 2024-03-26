import { CircularProgress, Grid } from "@mui/material"
import Type from "src/article/Type"
import PageHeader from "../../src/public/PageHeader"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import useData from "context/data"
import AnnouncementCompo from "src/article/Announcement"
import HeadMeta from 'src/public/HeadMeta';
const Article = () => {
  const [typeText, setTypeText] = useState("")
  const {data, fetch_data,thumbnailsList, fetch_thumbnails_list} = useData()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
      if(!data.article.fetched) fetch_data("article")
  },[])

  useEffect(()=> {
    const fetchData = async () => {
      if(thumbnailsList.all) setIsLoading(false)
      else {
        await fetch_thumbnails_list("all")
        setIsLoading(false)
      }
    }
    fetchData()
  },[])

  return(
    <>

      <HeadMeta
        title={`전체실적 - 삼성조경`}
        description="삼성조경의 전체실적 현황입니다. 더 나은 환경과 삶을 위한 풍요로움을 창출합니다."
        url={`https://xn--289a529abkak1w.kr/article/all`}
      />


      <PageHeader main="사업실적"sub="전체실적" type="article" item={`all_header_title`} />

      {isLoading ? <div style={{width:"100vw", marginTop:'100px',marginBottom:"100px",  display:"flex", justifyContent:"center"}}><CircularProgress /></div> : 
          <Type list={thumbnailsList.all} type="all" typeText="전체실적"/>}
      <div style={{marginBottom:"100px"}}></div>
    </>
  )
}

export default Article