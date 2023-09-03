import { Grid } from "@mui/material"
import styles from "./Financial.module.css"
import { useEffect, useState } from "react"

import {initial, start} from "hooks/useAni"
import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer"


import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';

import useData from "context/data"
import EditButton from "src/admin/EditButton"

const Hrd = () => {
  const {data, fetch_data} = useData()
  const [fetchedData, setFetchedData] = useState({
    text1:`(주)동우개발은 공동주택관리 분야를 선도하고 있습니다.
  고객 감동서비스를 경영이념으로 실천하며 선진화 된 경영관리 기법을 현장에 적용, 투명한 회계관리 업무를 지원하고 있습니다.`,
    text2:`아파트 운영예산 수립과 진행 과정을 투명하게 운영하기 위해 회계업무 경험이 풍부한 전문가를 통해 통합교육 및 사업장별 방문을 하여 회계업무를 지원합니다.`,
    imgUrl: "https://cdn.imweb.me/thumbnail/20210409/e932cb0d2c43b.jpg",
    list1: [{title:"직원관리 프로그램", content:`아파트관리 분야의 우수인력을 투명하고 공정하게 선발하여 함께 성장해 나가는 동우개발 인력관리 시스템을 운영하고 있습니다.`}],
    list2: [
      {title:"인성교육", content:"책임감, 소속감, 신용교육 등 아파트 회계관리 업무를 위한 인성교육 실시"},
      {title:"회계교육", content:"회계전문가 교육과정을 통해 통합교육, 방문교육을 통해 회계교육 지원"},
      {title:"1:1 컨설팅", content:"본사에서는 분야별 전문가 지원 서비스로 1:1 컨설팅 지원을 하고 있습니다"},
      {title:"회계 감사시스템 운영", content:"공동주택관리법을 기준으로 회계업무 전반에 대한 회계 감사 시스템 운영"},
    ],
    title1:"인성교육",
    content1:"책임감, 소속감, 신용교육 등 아파트 회계관리 업무를 위한 인성교육 실시",
    title2:"회계교육",
    content2:"회계전문가 교육과정을 통해 통합교육, 방문교육을 통해 회계교육 지원",
    title3:"1:1 컨설팅",
    content3:"본사에서는 분야별 전문가 지원 서비스로 1:1 컨설팅 지원을 하고 있습니다",
    title4:"회계 감사시스템 운영",
    content4:"공동주택관리법을 기준으로 회계업무 전반에 대한 회계 감사 시스템 운영",
  })

  useEffect(()=>{
    if(!data.financial.fetched) fetch_data("financial")
  },[])

  useEffect(() => {
    if(data?.financial?.fetched){
      setFetchedData({
        ...data.financial
      })
    }
  },[data?.financial])


  const ani1 = useAnimation()
  const ani2_1 = useAnimation()
  const ani2_2 = useAnimation()
  const ani3_1 = useAnimation()
  const ani3_2= useAnimation()
  const ani3_3 = useAnimation()

  const [inViewRef, inView] = useInView({ threshold: .3})
  const [inViewRef2, inView2] = useInView({threshold: 1})
  const [inViewRef3, inView3] = useInView({threshold: 1})
  


  if (inView) {ani1.start({...start(1,0.5)})}
  if(inView2) {ani2_1.start({...start(1,0)}); ani2_2.start({...start(1,0.5)})}
  if(inView3) {ani3_1.start({...start(0.5,0)}); ani3_2.start({...start(0.5,0.1)});ani3_3.start({...start(0.5,0.2)})}


  return(
    <div className={styles.main_container}>
      <motion.h2 {...initial(0,-50,0)} animate={{...start(0.5,0.2)}}>{fetchedData.text1}<EditButton type="financial" item="text1" text="텍스트" /></motion.h2>
      <motion.div {...initial(0,-50,0)} animate={{...start(0.5,0.4)}} className={styles.border} />
      <motion.h3 {...initial(0,50,0)} animate={{...start(1,1.0)}}>{fetchedData.text2}<EditButton type="financial" item="text2" text="텍스트" /></motion.h3>
      <motion.div className={styles.image_container} ref={inViewRef} {...initial(0,0,50)} animate={ani1}><img src={fetchedData.imgUrl} alt="회계관리" />
        <EditButton type="financial" item="imgUrl" text="이미지 삽입" mode="image" defaultImg="https://cdn.imweb.me/thumbnail/20210409/e932cb0d2c43b.jpg"/>
      </motion.div>

      <div className={styles.border2} />  

      <motion.ul className={styles.list1_container} ref={inViewRef2} {...initial()} animate={ani2_1}>
        <EditButton type="financial" item="list" text="내용" mode="arrOfObj_Hrd"/>
        {fetchedData.list?.map((item, index) => (
          <li key={index}>
            <div className={styles.title_container}>
              <CheckRoundedIcon style={{color: "green"}}/>
              <h4>{item.title}</h4>
            </div>
            <p>{item.text}</p>
          </li>
        ))}
      </motion.ul>
      
      <motion.div ref={inViewRef3}>
        <Grid container spacing={1} sx={{mt:8}}>
          <Grid item xs={12} md={3}>
            <motion.div className={styles.item_container} {...initial(0,0,30)} animate={ani3_1}>
              <CastForEducationOutlinedIcon style={{fontSize:"100px", color: "#777"}} />
              <h5 style={{position:"relative"}}>{fetchedData.title1}<EditButton type="financial" item="content1" text="내용" /></h5>
              <p style={{position:"relative"}}>{fetchedData.content1}</p><EditButton type="financial" item="title1" text="제목" />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={3}>
            <motion.div className={styles.item_container} {...initial(0,0,30)} animate={ani3_2}>
              <WidgetsOutlinedIcon style={{fontSize:"100px", color: "#777"}} />
              <h5 style={{position:"relative"}}>{fetchedData.title2}<EditButton type="financial" item="content2" text="내용" /></h5>
              <p style={{position:"relative"}}>{fetchedData.content2}</p><EditButton type="financial" item="title2" text="제목" />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={3}>
            <motion.div className={styles.item_container} {...initial(0,0,30)} animate={ani3_3}>
              <MapsHomeWorkOutlinedIcon style={{fontSize:"100px", color: "#777"}} />
              <h5 style={{position:"relative"}}>{fetchedData.title3}<EditButton type="financial" item="content3" text="내용" /></h5>
              <p style={{position:"relative"}}>{fetchedData.content3}</p><EditButton type="financial" item="title3" text="제목" />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={3}>
            <motion.div className={styles.item_container} {...initial(0,0,30)} animate={ani3_3}>
              <MapsHomeWorkOutlinedIcon style={{fontSize:"100px", color: "#777"}} />
              <h5 style={{position:"relative"}}>{fetchedData.title4}<EditButton type="financial" item="content4" text="내용" /></h5>
              <p style={{position:"relative"}}>{fetchedData.content4}</p><EditButton type="financial" item="title4" text="제목" />
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  )
}

export default Hrd