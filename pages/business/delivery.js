import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"

import Business from "src/business/six/Business"
import HeadMeta from 'src/public/HeadMeta';
const One = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])


  return(
    <>

<HeadMeta
        title="수목납품 - 삼성조경"
        description="삼성조경의 수목납품은 다양한 종류와 품질의 수목 납품, 환경 적응성 및 조경용도를 고려합니다."
        url="https://xn--289a529abkak1w.kr/business/delivery"
      />


      <PageHeader main="사업영역" sub="수목납품" type="business" item="six_header_title" />
      <Business />
    </>
  )
}

export default One