import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"

import Business from "src/business/four/Business"
import HeadMeta from 'src/public/HeadMeta';
const One = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])


  return(
    <>
          <HeadMeta
        title="삼성조경-벽면녹화(수직정원)"
        description="삼성조경 사업영역 중 벽면녹화(수직정원)에 대해 안내드립니다."
        url="https://xn--289a529abkak1w.kr/business/4"
      />


      <PageHeader main="사업영역" sub="벽면녹화(수직정원)" type="business" item="four_header_title" />
      <Business />
    </>
  )
}

export default One