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
        title="삼성조경-기본정보"
        description="삼성조경의 기본정보를 안내드립니다."
        url="https://xn--289a529abkak1w.kr/info/basic"
      />


      <PageHeader main="회사소개" sub="기본정보" type="info" item="basic_header_title" />
      <BasicAbout />
      <Basic />
    </>
  )
}

export default Greet