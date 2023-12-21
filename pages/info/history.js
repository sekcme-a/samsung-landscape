import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"
import Timeline from "../../src/info/history/Timeline"

const Greet = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])


  return(
    <>
      <PageHeader main="회사소개" sub="회사연혁" type="info" item="history_header_title" />
      <Timeline />
    </>
  )
}

export default Greet