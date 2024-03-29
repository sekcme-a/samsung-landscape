import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"

import styles from "src/info/Greet.module.css"
import EditButton from "src/admin/EditButton"
import HeadMeta from 'src/public/HeadMeta';
const Greet = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.info.fetched) fetch_data("info")
  },[])


  return(
    <>

    <HeadMeta
        title="인사말 - 삼성조경"
        description="안녕하세요. 삼성조경 주식회사입니다. 우리는 더 나은 미래를 위한 조경 및 환경 디자인 솔루션을 제공하는 회사로서, 자연과 도시를 조화롭게 연결하는 데 최선을 다하고 있습니다."
        url="https://xn--289a529abkak1w.kr/info/greet"
      />



      <PageHeader main="회사소개" sub="인사말" type="info" item="greet_header_title" />
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className={styles.top}>
              <img src={data.info.greet_img}alt="인사말 사진" style={{width:"200px"}}/>
              <EditButton type="info" item="greet_img" text="이미지"
                mode="image" defaultImg="/images/greet.png"
              />
              <p style={{position:"relative"}}>
                {data.info.greet_img_text ?? "삼성조경 회장"}
                <EditButton type="info" item="greet_img_text" text="이미지 문구" />
              </p>
            </div>
            <div className={styles.content_container}>
              <h4>
                {data.info.greet_content_title ?? "안녕하십니까"}
                <EditButton type="info" item="greet_content_title" text="제목" />
              </h4>
              <p>
                {data.info.greet_content_text ?? "삼성조경의 인사말입니다."}
                <EditButton type="info" item="greet_content_text" text="인사말" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Greet