import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"
import Map from "../../src/info/map/Map"
import HeadMeta from 'src/public/HeadMeta';
const Greet = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])


  return(
    <>

<HeadMeta
        title="찾아오는 길 - 삼성조경"
        description="삼성조경에 찾아오는 길을 안내드립니다. 서울특별시 도봉구 시루봉로 234, 동우빌딩 2층"
        url="https://xn--289a529abkak1w.kr/info/map"
      />



      <PageHeader main="회사소개" sub="찾아오는 길" type="info" item="map_header_title" />
      <Map />
    </>
  )
}

export default Greet