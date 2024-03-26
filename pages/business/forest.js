import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"

import Business from "src/business/one/Business"
import HeadMeta from 'src/public/HeadMeta';
const One = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])


  return(
    <>
      <HeadMeta
        title="조경식재공사 - 삼성조경"
        description="조경식재공사의 환경 친화성과 지속 가능성, 삼성조경의 조경식재공사를 소개해드립니다."
        url="https://xn--289a529abkak1w.kr/business/forest"
      />


      <PageHeader main="사업영역" sub="조경식재공사" type="business" item="one_header_title" />
      <Business />
    </>
  )
}

export default One