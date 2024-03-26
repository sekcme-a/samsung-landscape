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
        title="조직도 - 삼성조경"
        description="삼성조경은 각자의 역할과 업무에 대한 중요성을 이해하면서도, 우리는 하나의 큰 팀으로서 상호간에 지지하고 배려하는 분위기를 유지하고 있습니다."
        url="https://xn--289a529abkak1w.kr/info/organization"
      />



      <PageHeader main="회사소개" sub="조직도" type="info" item="organization_header_title" />
      <OrganizationImage />
    </>
  )
}

export default Greet