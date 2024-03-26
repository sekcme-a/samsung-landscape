import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"

import Business from "src/business/five/Business"
import HeadMeta from 'src/public/HeadMeta';
const One = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])


  return(
    <>

<HeadMeta
        title="정원시공 - 삼성조경"
        description="삼성조경의 정원시공을 소개합니다. 특화된 정원 디자인과 기술적 시공 노하우, 다양한 식물과 조경소품 활용."
        url="https://xn--289a529abkak1w.kr/business/construction"
      />


      <PageHeader main="사업영역" sub="정원시공" type="business" item="five_header_title" />
      <Business />
    </>
  )
}

export default One