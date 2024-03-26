import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"

import styles from "src/info/Greet.module.css"
import EditButton from "src/admin/EditButton"
import Basic from "../../src/info/basic/Basic"
import BasicAbout from "../../src/info/basic/BasicAbout"
import HeadMeta from 'src/public/HeadMeta';
const Greet = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])


  return(
    <>

<HeadMeta
        title="기본정보 - 삼성조경"
        description="삼성조경 주식회사는 조경 및 환경 디자인 솔루션을 제공하는 회사로서, 자연과 도시를 조화롭게 연결하는데 최선을 다하고 있습니다."
        url="https://xn--289a529abkak1w.kr/info/basic"
      />


      <PageHeader main="회사소개" sub="기본정보" type="info" item="basic_header_title" />
      <BasicAbout />
      <Basic />
    </>
  )
}

export default Greet