import { Grid } from "@mui/material"
import styles from "./Building.module.css"
import { useEffect, useRef, useState } from "react"

import {initial, start} from "hooks/useAni"
import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer"

const SEQUENTIALDELAY = 0.2
const Building = ({data}) => {
  const [monitorSize, setMonitorSize] = useState(0);

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
      <motion.h2 {...initial(0,-50,0)} animate={{...start(0.5,0.2)}}>{data.text1}</motion.h2>
      <motion.div {...initial(0,-50,0)} animate={{...start(0.5,0.4)}} className={styles.border} />
      <motion.h3 {...initial(0,50,0)} animate={{...start(1,1.0)}}>{data.text2}</motion.h3>
      <Grid container spacing={2} rowSpacing={5} className={styles.list_container} ref={inViewRef}>
        {data.list.map((item, index) => (
          <Grid item key={index} xs={12} md={6} lg={4}>
            <motion.div className={styles.item_container} {...initial(0,0,20)} {...sequentialAnimate(index)} >
              <img src={item.imgUrl} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Building