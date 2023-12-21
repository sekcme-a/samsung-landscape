import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"
import OrganizationImage from "../../src/info/organization/OrganizationImage"

const Greet = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])


  return(
    <>
      <PageHeader main="회사소개" sub="조직도" type="info" item="organization_header_title" />
      <OrganizationImage />
    </>
  )
}

export default Greet