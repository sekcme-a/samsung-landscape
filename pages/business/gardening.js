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
        title="벽면녹화(수직정원) - 삼성조경"
        description="수직정원의 아름다움과 공간 활용, 다양한 종류의 식물과 조화로운 디자인. 삼성조경의 벽면녹화입니다."
        url="https://xn--289a529abkak1w.kr/business/gardening"
      />


      <PageHeader main="사업영역" sub="벽면녹화(수직정원)" type="business" item="four_header_title" />
      <Business />
    </>
  )
}

export default One