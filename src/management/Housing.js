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


const Housing = ({data}) => {
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

  return(
    <div className={styles.main_container}>
      <motion.h6 {...initial(0,0,30)} animate={{...start(1,0)}}>{data.text1}</motion.h6>
      <motion.img {...initial(0,0,30)} animate={ani2} ref={inViewRef2} src={data.imgUrl1} alt="이미지1"></motion.img>
      <motion.h6 {...initial(0,0,30)} animate={ani3} ref={inViewRef3} style={{marginTop: "80px"}}>{data.text2}</motion.h6>
      <motion.img {...initial(0,0,30)} animate={ani4} ref={inViewRef4} src={data.imgUrl2}  alt="이미지2"></motion.img>

      <motion.h3 {...initial(0,0,30)} animate={ani5} ref={inViewRef5}>3S</motion.h3>
      <motion.h4 {...initial(0,0,30)} animate={ani6} ref={inViewRef6}>{data.text3}</motion.h4>
      <motion.div ref={inViewRef7}>
      <Grid container spacing={2} >
        <Grid item sx={12} md={4}>
          <motion.div className={styles.item_container} {...initial(0,0,30)} animate={ani7_1}>
            <AddReactionOutlinedIcon style={{fontSize:"60px", color: "green"}}/>
            <h5 style={{color:"green"}}>Smile</h5>
            <p>{data.smile}</p> 
          </motion.div>
        </Grid>
        <Grid item sx={12} md={4}>
          <motion.div className={styles.item_container}  {...initial(0,0,30)} animate={ani7_2}>
            <SupportAgentOutlinedIcon style={{fontSize:"60px", color: "blue"}}/>
            <h5 style={{color:"blue"}}>Service</h5>
            <p>{data.service}</p>
          </motion.div>
        </Grid>
        <Grid item sx={12} md={4}>
          <motion.div className={styles.item_container}  {...initial(0,0,30)} animate={ani7_3}>
            <SpeedIcon style={{fontSize:"60px", color: "orange"}}/>
            <h5 style={{color:"orange"}}>Speed</h5>
            <p>{data.speed}</p>
          </motion.div>
        </Grid>
      </Grid>
      </motion.div>
    </div>
  )
}

export default Housing




