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

const Hrd = ({data}) => {
  const [monitorSize, setMonitorSize] = useState(1000);
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
      <motion.h2 {...initial(0,-50,0)} animate={{...start(0.5,0.2)}}>{data.text1}</motion.h2>
      <motion.div {...initial(0,-50,0)} animate={{...start(0.5,0.4)}} className={styles.border} />
      <motion.h3 {...initial(0,50,0)} animate={{...start(1,1.0)}}>{data.text2}</motion.h3>
      <motion.div className={styles.image_container} ref={inViewRef} {...initial(0,0,50)} animate={ani1}><img src={data.imgUrl} alt="부동산자산관리" /></motion.div>

      <div className={styles.border2} />

      <motion.ul className={styles.list1_container} ref={inViewRef2} {...initial()} animate={ani2_1}>
        {data.list1.map((item, index) => (
          <li key={index}>
            <div className={styles.title_container}>
              <CheckRoundedIcon style={{color: "green"}}/>
              <h4>{item.title}</h4>
            </div>
            <p>{item.content}</p>
          </li>
        ))}
      </motion.ul>
      
      <motion.div ref={inViewRef3}>
        <Grid container spacing={1} sx={{mt:8}}>
          <Grid item xs={12} md={4}>
            <motion.div className={styles.item_container} {...initial(0,0,30)} animate={ani3_1}>
              <CastForEducationOutlinedIcon style={{fontSize:"100px", color: "#777"}} />
              <h5>{data.list2[0].title}</h5>
              <p>{data.list2[0].content}</p>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div className={styles.item_container} {...initial(0,0,30)} animate={ani3_2}>
              <WidgetsOutlinedIcon style={{fontSize:"100px", color: "#777"}} />
              <h5>{data.list2[1].title}</h5>
              <p>{data.list2[1].content}</p>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div className={styles.item_container} {...initial(0,0,30)} animate={ani3_3}>
              <MapsHomeWorkOutlinedIcon style={{fontSize:"100px", color: "#777"}} />
              <h5>{data.list2[2].title}</h5>
              <p>{data.list2[2].content}</p>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  )
}

export default Hrd