import { Grid } from "@mui/material"
import styles from "./Hrd.module.css"
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
  const [monitorSize, setMonitorSize] = useState(1000);
  const {data, fetch_data} = useData()
  const [fetchedData, setFetchedData] = useState({
    text1:`(주)동우개발은 공동주택관리 업계를 선도하고 있습니다.
  고객 감동서비스를 경영이념으로 실천하며 선진화 된 경영관리 방법을 현장에 적용하기 위해 각 분야의 전문적인 인재채용과 인사관리 업무를 관리 및 지원하고 있습니다.`,
    text2:`정보통신기술을 기반으로 우수한 인력을 채용에서부터 관리까지 사내 그룹웨어인 동행웨어를 구축하여 꼼꼼하게 통합관리를 하고 있습니다.`,
    imgUrl:"https://cdn.imweb.me/thumbnail/20210408/ae9d3227282f4.png",
    list1: [
      {title: "우수인력 채용", content:"아파트관리 분야의 우수인력을 투명하고 공정하게 선발하여 함께 성장해나가는 동우개발 인력관리 시스템을 운영하고 있습니다."},
      {title:"직원관리 프로그램", content:"아파트관리 분야의 우수인력을 투명하고 공정하게 선발하여 함께 성장해나가는 동우개발 인력관리 시스템을 운영하고 있습니다."}
    ],
    title1:"통합교육",
    content1: "관리소장, 경리, 법무, 노무, 세무, 회계등 부서별 통합교육",
    title2: "실무교육",
    content2: "직책 및 직무별 관리업무에 관한 현장에 필요한 실무교육 실시",
    title3:"오피스텔 관리",
    content3:"우수직원 포상 제도를 실시, 소속감 및 업무에 대한 책임감과 동기부여 강화",
  })
  useEffect(()=>{
    if(!data.hrd.fetched) fetch_data("hrd")
  },[])

  useEffect(() => {
    if(data?.hrd?.fetched){
      setFetchedData({
        ...data.hrd
      })
    }
  },[data?.hrd])

  const ani1 = useAnimation()
  const ani2_1 = useAnimation()
  const ani2_2 = useAnimation()
  const ani3_1 = useAnimation()
  const ani3_2= useAnimation()
  const ani3_3 = useAnimation()

  const [inViewRef, inView] = useInView({ threshold: .3})
  const [inViewRef2, inView2] = useInView({threshold: 1})
  const [inViewRef3, inView3] = useInView(monitorSize>900 ? {threshold: 1} : {threshold: 0.1})
  


  if (inView) {ani1.start({...start(1,0.5)})}
  if(inView2) {ani2_1.start({...start(1,0)}); ani2_2.start({...start(1,0.5)})}
  if(inView3) {ani3_1.start({...start(0.5,0)}); ani3_2.start({...start(0.5,0.1)});ani3_3.start({...start(0.5,0.2)})}

  //***모니터 크기 측정 */

  
  useEffect(() => {
      const handleResize = () => {
      setMonitorSize(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
      window.removeEventListener('resize', handleResize);
      };
  }, []);
  //**모니터 크기 측정 끝 */

  return(
    <div className={styles.main_container}>
      <motion.h2 {...initial(0,-50,0)} animate={{...start(0.5,0.2)}}>{fetchedData.text1}<EditButton type="hrd" item="text1" text="텍스트" /></motion.h2>
      <motion.div {...initial(0,-50,0)} animate={{...start(0.5,0.4)}} className={styles.border} />
      <motion.h3 {...initial(0,50,0)} animate={{...start(1,1.0)}}>{fetchedData.text2}<EditButton type="hrd" item="text2" text="텍스트" /></motion.h3>
      <motion.div className={styles.image_container} ref={inViewRef} {...initial(0,0,50)} animate={ani1}><img src={fetchedData.imgUrl} alt="부동산자산관리" />
        <EditButton type="hrd" item="imgUrl" text="이미지 삽입" mode="image" defaultImg="https://cdn.imweb.me/thumbnail/20210408/ae9d3227282f4.png"/>
      </motion.div>

      <div className={styles.border2} />

      <motion.ul className={styles.list1_container} ref={inViewRef2} {...initial()} animate={ani2_1}>
        <EditButton type="hrd" item="list" text="내용" mode="arrOfObj_Hrd"/>
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
          <Grid item xs={12} md={4}>
            <motion.div className={styles.item_container} {...initial(0,0,30)} animate={ani3_1}>
              <CastForEducationOutlinedIcon style={{fontSize:"100px", color: "#777"}} />
              <h5 style={{position:"relative"}}>{fetchedData.title1}<EditButton type="hrd" item="content1" text="내용" /></h5>
              <p style={{position:"relative"}}>{fetchedData.content1}</p><EditButton type="hrd" item="title1" text="제목" />
            </motion.div> 
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div className={styles.item_container} {...initial(0,0,30)} animate={ani3_2}>
              <WidgetsOutlinedIcon style={{fontSize:"100px", color: "#777"}} />
              <h5 style={{position:"relative"}}>{fetchedData.title2}<EditButton type="hrd" item="content2" text="내용" /></h5>
              <p style={{position:"relative"}}>{fetchedData.content2}</p><EditButton type="hrd" item="title2" text="제목" />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div className={styles.item_container} {...initial(0,0,30)} animate={ani3_3}>
              <MapsHomeWorkOutlinedIcon style={{fontSize:"100px", color: "#777"}} />
              <h5 style={{position:"relative"}}>{fetchedData.title3}<EditButton type="hrd" item="content3" text="내용" /></h5>
              <p style={{position:"relative"}}>{fetchedData.content3}</p><EditButton type="hrd" item="title3" text="제목" />
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  )
}

export default Hrd