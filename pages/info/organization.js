import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"
import OrganizationImage from "../../src/info/organization/OrganizationImage"
import HeadMeta from 'src/public/HeadMeta';
const Greet = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])


  return(
    <>
    <HeadMeta
        title="삼성조경-조직도"
        description="삼성조경의 조직도를 안내드립니다."
        url="https://xn--289a529abkak1w.kr/info/organization"
      />



      <PageHeader main="회사소개" sub="조직도" type="info" item="organization_header_title" />
      <OrganizationImage />
    </>
  )
}

export default Greet