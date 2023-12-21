import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"

import Business from "src/business/four/Business"

const One = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])


  return(
    <>
      <PageHeader main="사업영역" sub="벽면녹화(수직정원)" type="business" item="four_header_title" />
      <Business />
    </>
  )
}

export default One