import { Grid } from "@mui/material"
import styles from "./Building.module.css"
import { useEffect, useRef, useState } from "react"

import {initial, start} from "hooks/useAni"
import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer"
import useData from "context/data"

import EditButton from "src/admin/EditButton"

const SEQUENTIALDELAY = 0.2
const Building = () => {
  const [monitorSize, setMonitorSize] = useState(0);
  const {data, fetch_data} = useData()
  const [fetchedData, setFetchedData] = useState({
    text1:`(주)동우개발은 공동주택관리 분야를 선도하고 있습니다.
  고객감동 서비스를 경영이념으로 실천하며 선진화 된 경영관리 기법을 현장에 적용 집합건물 분야의 선두 기업으로서 책임을 다하고 있습니다.`,
    text2:`빌딩 관리를 통해 건물의 수명 연장과 재산가치 증대를 위해 서비스를 제공하며 이용자에게 편리하고 안전한 공간 제공을 위하여 최선을 다하고 있습니다.`,
    list: [
      {imgUrl:"https://cdn.imweb.me/thumbnail/20210408/974c98b211dd2.png",title:"오피스텔관리",content:"오피스텔 특성에 맞는 관리시스템 도입, 관리단과 협력아혀 자산가치 증대."},
      {imgUrl:"https://cdn.imweb.me/thumbnail/20210408/d4286c4d03bf3.png",title:"상가건물관리",content:"주변 타 상가와 차별화 된 서비스제공, 경비/청소/관리 통합운영."},
      {imgUrl:"https://cdn.imweb.me/thumbnail/20210408/4b501db5cd25a.png",title:"사옥관리",content:"고객의 건물가치를 유지하기 위해 건물 유지관리와 경비미화 서비스제공"},
      {imgUrl:"https://cdn.imweb.me/thumbnail/20210408/ad79a598a5a50.png",title:"호텔관리",content:"고객 중심의 서비스를 제공하며 인력파견 및 실무자 중심의 서비스제공"},
      {imgUrl:"https://cdn.imweb.me/thumbnail/20210408/a9c2cd5770492.png",title:"쇼핑몰관리",content:"청소/경비 등 고객을 최우선으로 생각하는 맞춤형 서비스를 제공."},
      {imgUrl:"https://cdn.imweb.me/thumbnail/20210408/c48f7d847354c.png",title:"병원/특수시설 관리",content:"특화 된 건물에 맞는 전문교육을 받은 인력파견 및 시설관리 서비스 제공."}
    ]
  })

  useEffect(()=>{
    if(!data.building.fetched) fetch_data("building")
  },[])

  useEffect(() => {
    if(data?.building?.fetched){
      setFetchedData({
        ...data.building
      })
    }
  },[data?.building])



  const ani1 = useAnimation() 
  const ani2 = useAnimation()
  const ani3 = useAnimation()
  const ani4 = useAnimation()
  const ani5 = useAnimation()
  const ani6 = useAnimation()
  const [inViewRef, inView] = useInView(monitorSize>900 ? { threshold:0.7} : {threshold: 0.1})
  const noneRef = useRef()


  if (inView) {ani1.start({...start(1,0)})}
  if (inView) {ani2.start({...start(1,SEQUENTIALDELAY)})}
  if (inView) {ani3.start({...start(1,SEQUENTIALDELAY*2)})}
  if (inView) {ani4.start({...start(1,SEQUENTIALDELAY*3)})}
  if (inView) {ani5.start({...start(1,SEQUENTIALDELAY*4)})}
  if (inView) {ani6.start({...start(1,SEQUENTIALDELAY*5)})}

  const sequentialAnimate = (index) => {
    if(index===0) return {animate: ani1}
    if(index===1) return {animate: ani2}
    if(index===2) return {animate: ani3}
    if(index===3) return {animate: ani4}
    if(index===4) return {animate: ani5}
    if(index===5) return {animate: ani6}
  }

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
      <motion.h2 {...initial(0,-50,0)} animate={{...start(0.5,0.2)}} style={{position:"relative"}}>{fetchedData.text1}<EditButton type="building" item="text1" text="텍스트" /></motion.h2>
      <motion.div {...initial(0,-50,0)} animate={{...start(0.5,0.4)}} className={styles.border} />
      <motion.h3 {...initial(0,50,0)} animate={{...start(1,1.0)}}>{fetchedData.text2}<EditButton type="building" item="text2" text="텍스트" /></motion.h3>
      <Grid container spacing={2} rowSpacing={5} className={styles.list_container} ref={inViewRef} style={{position:"relative", marginTop:"50px"}}>
        <EditButton type="building" item="list" text="텍스트" mode="building_list" />
        {fetchedData.list?.map((item, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <motion.div className={styles.item_container} {...initial(0,0,20)} {...sequentialAnimate(index)} >
              <img src={item.imgUrl} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Building