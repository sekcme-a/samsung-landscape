import styles from "src/management/Housing.module.css"
import useScrollFadeIn from "hooks/useScrollFadeIn"
import { Grid } from "@mui/material"
import { useState, useEffect } from "react"

import {initial, start} from "hooks/useAni"

import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer"

import AddReactionOutlinedIcon from '@mui/icons-material/AddReactionOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import SpeedIcon from '@mui/icons-material/Speed';

import EditButton from "src/admin/EditButton"
import useData from "context/data"


const Housing = () => {
  const {data, fetch_data} = useData()
  const [fetchedData, setFetchedData] = useState({
    text1:`(주)동우개발은 공동주택관리 업계를 선도하고 있습니다.
  고객 감동서비스를 경영이념으로 실천하며 선진화 된 경영관리 방법을 현장에 적용하여 공동주택관리 업계를 선도하는 기업으로서의 책임을 다하고 있습니다.`,
    imgUrl1: `https://cdn.imweb.me/thumbnail/20210407/f36753181e009.png`,
    text2:`공동주택 종합관리는 건물시설관리, 인력관리, 회계관리, 경비보안, 조경, 미화, 위생관리 등 다양한 전문분야를 아우르는 복잡한 업무로서 축적된 경험과 기술력을 바탕으로 서비스를 지원하고 있습니다.`,
    imgUrl2: `https://cdn.imweb.me/thumbnail/20210422/cd4ec2f5e5a20.png`,
  
    text3: `(주)동우개발의 고객 서비스 질 향상을 위한 3S 시스템 구현`,
    smile: `건강한 얼굴, 미소 머금은 얼굴. 단정한 용모, 명랑한 음성, 정중한 태도, 평소 상황에 따른 대응훈련.`,
    service: `친절응대, 고객의 입장에서의 공감과 이해, 정중한 자세와 일 처리, 고객과의 약속 이행, 사후 점검.`,
    speed: `재빠른 행동, 신속한 처리, 일의 표준화, 고객의 일부터 처리하는 신속함.`
  })
  const [monitorSize, setMonitorSize] = useState(1500);
  const ani1 = useAnimation()
  const [inViewRef, inView] = useInView({ threshold: .2})
  const ani2 = useAnimation()
  const [inViewRef2, inView2] = useInView({threshold: .2})
  const ani3 = useAnimation()
  const [inViewRef3, inView3] = useInView({threshold: .2})
  const ani4 = useAnimation()
  const [inViewRef4, inView4] = useInView({threshold: .2})
  const ani5 = useAnimation()
  const [inViewRef5, inView5] = useInView(monitorSize>900 ? {threshold: 0.2}: {threshold: 0.1})
  const ani6 = useAnimation()
  const [inViewRef6, inView6] = useInView({threshold: .2})
  const ani7_1 = useAnimation();  const ani7_2 = useAnimation();  const ani7_3 = useAnimation(); 
  const [inViewRef7, inView7] = useInView({threshold: .2})
  const [inViewRef8, inView8] = useInView({threshold: .2})

  if (inView) {ani1.start({...start(1,0)})}
  if (inView2) {ani2.start({...start(1,0.5)})}
  if (inView3) {ani3.start({...start(1,0)})}
  if (inView4) {ani4.start({...start(1,0)})}
  if (inView5) {ani5.start({...start(1,0)})}
  if (inView5) {ani6.start({...start(1,0.2)})}
  if (inView5) {ani7_1.start({...start(1,0.4)});ani7_2.start({...start(1,0.6)});ani7_3.start({...start(1,0.8)})}
  if (inView8) {ani8.start({...start(1,0)})}

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



useEffect(()=>{
  if(!data.housing.fetched) fetch_data("housing")
},[])

useEffect(() => {
  if(data?.housing?.fetched){
    setFetchedData({...data.housing
    })
  }
},[data?.housing])


  return(
    <div className={styles.main_container}>
      <motion.h6 {...initial(0,0,30)} animate={{...start(1,0)}} style={{position:"relative"}}>{fetchedData.text1}<EditButton type="housing" item="text1" text="텍스트"  /></motion.h6>

      <motion.img {...initial(0,0,30)} animate={ani2} ref={inViewRef2} src={fetchedData.imgUrl1} alt="이미지1" style={{position:"relative"}}/>
      <div style={{position:"relative"}}><EditButton type="housing" item="imgUrl1" text="이미지 삽입" mode="image" defaultImg="https://cdn.imweb.me/thumbnail/20210407/f36753181e009.png"/></div>
      
      <motion.h6 {...initial(0,0,30)} animate={ani3} ref={inViewRef3}style={{position:"relative", marginTop:"80px"}}>{fetchedData.text2}<EditButton type="housing" item="text2" text="텍스트"  /></motion.h6>
      <motion.img {...initial(0,0,30)} animate={ani4} ref={inViewRef4} src={fetchedData.imgUrl2}  alt="이미지2"></motion.img>
      <div style={{position:"relative"}}><EditButton type="housing" item="imgUrl2" text="이미지 삽입" mode="image" defaultImg="https://cdn.imweb.me/thumbnail/20210422/cd4ec2f5e5a20.png"/></div>

      <motion.h3 {...initial(0,0,30)} animate={ani5} ref={inViewRef5}>3S</motion.h3>
      <motion.h4 {...initial(0,0,30)} animate={ani6} ref={inViewRef6} style={{position:"relative"}}>{fetchedData.text3}<EditButton type="housing" item="text3" text="텍스트"  /></motion.h4>
      <motion.div ref={inViewRef7}>
      <Grid container spacing={2} >
        <Grid item sx={12} md={4}>
          <motion.div className={styles.item_container} {...initial(0,0,30)} animate={ani7_1}>
            <AddReactionOutlinedIcon style={{fontSize:"60px", color: "green"}}/>
            <h5 style={{color:"green"}}>Smile</h5>
            <p>{fetchedData.smile}<EditButton type="housing" item="smile" text="텍스트"  /></p> 
          </motion.div>
        </Grid>
        <Grid item sx={12} md={4}>
          <motion.div className={styles.item_container}  {...initial(0,0,30)} animate={ani7_2}>
            <SupportAgentOutlinedIcon style={{fontSize:"60px", color: "blue"}}/>
            <h5 style={{color:"blue"}}>Service</h5>
            <p>{fetchedData.service}<EditButton type="housing" item="service" text="텍스트"  /></p>
          </motion.div>
        </Grid>
        <Grid item sx={12} md={4}>
          <motion.div className={styles.item_container}  {...initial(0,0,30)} animate={ani7_3}>
            <SpeedIcon style={{fontSize:"60px", color: "orange"}}/>
            <h5 style={{color:"orange"}}>Speed</h5>
            <p>{fetchedData.speed}<EditButton type="housing" item="speed" text="텍스트"  /></p>
          </motion.div>
        </Grid>
      </Grid>
      </motion.div>
    </div>
  )
}

export default Housing




