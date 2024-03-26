import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"
import Timeline from "../../src/info/history/Timeline"
import HeadMeta from 'src/public/HeadMeta';
const Greet = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])


  return(
    <>

<HeadMeta
        title="회사연혁 - 삼성조경"
        description="삼성조경의 창립부터 현재까지의 회사연혁을 안내드립니다."
        url="https://xn--289a529abkak1w.kr/info/history"
      />



      <PageHeader main="회사소개" sub="회사연혁" type="info" item="history_header_title" />
      <Timeline />
    </>
  )
}

export default Greet