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
      if(thumbnailsList.plan) setIsLoading(false)
      else {
        await fetch_thumbnails_list("plan")
        setIsLoading(false)
      }
    }
    fetchData()
  },[])

  return(
    <>

      <HeadMeta
        title={`계획/설계 - 삼성조경`}
        description="계획과 설계 현황을 전해드립니다. 조경 식재, 시설물 설치공사, 삼성조경."
        url={`https://xn--289a529abkak1w.kr/article/plan`}
      />


      <PageHeader main="사업실적"sub="계획/설계" type="article" item={`plan_header_title`} />

      {isLoading ? <div style={{width:"100vw", marginTop:'100px',marginBottom:"100px",  display:"flex", justifyContent:"center"}}><CircularProgress /></div> : 
        // type==="announcement" ?
        //   <AnnouncementCompo list={thumbnailsList[type]}/> 
        //   :
        <Type list={thumbnailsList.plan} type="plan" typeText="계획/설계"/>}
      <div style={{marginBottom:"100px"}}></div>
    </>
  )
}

export default Article