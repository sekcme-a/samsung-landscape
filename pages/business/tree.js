import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"

import Business from "src/business/seven/Business"
import HeadMeta from 'src/public/HeadMeta';
const One = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])


  return(
    <>

<HeadMeta
        title="나무병원 - 삼성조경"
        description="삼성조경 나무병원의 진단 및 치료, 예방관리, 상담 및 교육, 유지 관리에 대해 알려드립니다."
        url="https://xn--289a529abkak1w.kr/business/tree"
      />


      <PageHeader main="사업영역" sub="나무병원" type="business" item="seven_header_title" />
      <Business />
    </>
  )
}

export default One