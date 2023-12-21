import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"
import Map from "../../src/info/map/Map"

const Greet = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])


  return(
    <>
      <PageHeader main="회사소개" sub="찾아오는 길" type="info" item="map_header_title" />
      <Map />
    </>
  )
}

export default Greet