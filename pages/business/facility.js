import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"

import Business from "src/business/two/Business"
import HeadMeta from 'src/public/HeadMeta';
const Two = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])


  return(
    <>

      <HeadMeta
        title="조경시설물설치공사 - 삼성조경"
        description="풍부한 녹지 공간 조성, 조경 시설물 설치, 기능적이고 환경 친화적 설계. 삼성조경의 조경시설물설치공사입니다."
        url="https://xn--289a529abkak1w.kr/business/facility"
      />
      <PageHeader main="사업영역" sub="조경시설물설치공사" type="business" item="two_header_title" />
      <Business />
    </>
  )
}

export default Two