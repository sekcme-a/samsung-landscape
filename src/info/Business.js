import { Grid } from "@mui/material"
import styles from "./Business.module.css"

import EditButton from "src/admin/EditButton"

import useData from "context/data"
import { useEffect, useState } from "react"

const Business = () => {
  const {data, fetch_data} = useData()
  const [fetchedData, setFetchedData] = useState({
    text: `를 이니셜을 모티브로 하여 (주)동우개발 전 직원들이 고객을 향해 친절하게 인사하는 모습을 형상화 한 것이며, 고객 서비스를 최고의 기업 가치로 생각하는 (주)동우개발의 의지를 담아낸 CI 입니다.`,
    yineum: [
      "전문적이고 혁신적인 관리를 통한 입주민 자산가치 증대",
      "시설 및 입주민등에 대한 철저한 서비스 강화",
      "입주민의 재산보호와 쾌적한 주거환경 조성",
      "재산가치 증대의 극대화를 위한 차별화된 관리방법 연구 및 개발",
      "전문관리를 통한 체계적 운영관리",
      "합리적인 경영과 투명한 공개관리"
    ],
    logoImg:"/logo-black.png"
  })

  useEffect(()=>{
    if(!data.business.fetched) fetch_data("business")
  },[])

  useEffect(() => {
    if(data?.business?.fetched){
      setFetchedData({
        ...data.business
      })
    }
  },[data?.business])

  return(
    <div className={styles.main_container}>
      <Grid container>
        <Grid item xs={12} sm={1} md={2}>
          <div className={styles.border}></div>
          <h2 className={styles.title}>CI</h2>
        </Grid>

        <Grid item xs={12} sm={4} md={5}className={styles.image_container}>
          <div style={{position:"relative"}} >
            <img src={fetchedData.logoImg} alt="logo" className={styles.image}/>
            <EditButton type="business" item="logoImg" text="로고 이미지 삽입" mode="image" defaultImg="/logo-black.png"/>
          </div>
        </Grid>
      

        <Grid item xs={12} sm={7} md={5}>
          <p className={styles.ci_content} style={{position:"relative"}}>
            <strong>
              <span className={styles.green_text}>d</span>
              <span className={styles.blue_text}>f</span>
              {`(`}
              <span className={styles.green_text}>d</span>
              {`ongwoo `}
              <span className={styles.blue_text}>f</span>
              {`idelity)`}
            </strong>
            {fetchedData.text}
            <EditButton type="business" item="text" text="텍스트"  />
          </p>
        </Grid>
      </Grid>


      <Grid container sx={{mt:"100px"}} spacing={2} className={styles.sahoon_container}>
        <Grid item xs={12} sm={1} md={2}>
          <div className={styles.border}></div>
          <h2 className={styles.title}>사훈</h2>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <div className={styles.green_border} />
          <p>DW Green</p>
          <h4 className={styles.color_title}>신 의 (信 義)</h4>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className={styles.blue_border} />
          <p>DW Blue</p>
          <h4 className={styles.color_title}>성 실 (誠 實)</h4>
        </Grid>
        <Grid item xs={12} sm={3} md={3}>
          <div className={styles.yellow_border} />
          <p>DW Yellow</p>
          <h4 className={styles.color_title}>봉 사 (奉 仕)</h4>
        </Grid>
      </Grid>


      <Grid container sx={{mt:"100px"}} spacing={2} className={styles.yinuem_container}>
        <Grid item xs={12} sm={2} md={2}>
          <div className={styles.border}></div>
          <h2 className={styles.title}>경영이념</h2>
        </Grid>

        <Grid item xs={12} sm={10} md={10} style={{position:"relative"}}>
          <EditButton type="business" item="yinuem" text="텍스트" mode="list" />
          <ul>
            {
              fetchedData.yinuem?.map((item, index) => {
                return(
                  <li key={index}>{item}</li>
                )
              })
            }
          </ul>
        </Grid>
      </Grid>
    </div>
  )
}

export default Business