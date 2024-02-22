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
        title="삼성조경-나무병원"
        description="삼성조경 사업영역 중 나무병원에 대해 안내드립니다."
        url="https://xn--289a529abkak1w.kr/business/7"
      />


      <PageHeader main="사업영역" sub="나무병원" type="business" item="seven_header_title" />
      <Business />
    </>
  )
}

export default One