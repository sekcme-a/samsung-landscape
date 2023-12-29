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
        title="삼성조경-수목납품"
        description="삼성조경 사업영역 중 수목납품에 대해 안내드립니다."
        url="https://xn--289a529abkak1w.kr/business/6"
      />


      <PageHeader main="사업영역" sub="수목납품" type="business" item="six_header_title" />
      <Business />
    </>
  )
}

export default One