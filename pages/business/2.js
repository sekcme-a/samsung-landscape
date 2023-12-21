import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"

import Business from "src/business/two/Business"

const Two = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])


  return(
    <>
      <PageHeader main="사업영역" sub="조경시설물설치공사" type="business" item="two_header_title" />
      <Business />
    </>
  )
}

export default Two