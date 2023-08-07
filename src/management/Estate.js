import { Grid } from "@mui/material"
import styles from "./Estate.module.css"
import { useEffect, useState } from "react"

import {initial, start} from "hooks/useAni"
import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer"

const SEQUENTIALDELAY = 0.2
const Building = ({data}) => {
  const ani1 = useAnimation()

  const [inViewRef, inView] = useInView({ threshold: .3})


  if (inView) {ani1.start({...start(1,0.5)})}


  return(
    <div className={styles.main_container}>
      <motion.h2 {...initial(0,-50,0)} animate={{...start(0.5,0.2)}}>{data.text1}</motion.h2>
      <motion.div {...initial(0,-50,0)} animate={{...start(0.5,0.4)}} className={styles.border} />
      <motion.h3 {...initial(0,50,0)} animate={{...start(1,1.0)}}>{data.text2}</motion.h3>
      <motion.div className={styles.image_container} ref={inViewRef} {...initial(0,0,50)} animate={ani1}><img src={data.imgUrl} alt="부동산자산관리" /></motion.div>
    </div>
  )
}

export default Building