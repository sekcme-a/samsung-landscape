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
        title="삼성조경-조경시설물설치공사"
        description="삼성조경 사업영역 중 조경시설물설치공사에 대해 안내드립니다."
        url="https://xn--289a529abkak1w.kr/business/2"
      />
      <PageHeader main="사업영역" sub="조경시설물설치공사" type="business" item="two_header_title" />
      <Business />
    </>
  )
}

export default Two