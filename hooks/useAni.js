import {motion, useAnimation} from "framer-motion"
import { useInView } from "react-intersection-observer"


export const initial = (opacity=0, x=0, y=0) => {

  return {initial:{...{opacity, x, y}}}
}

export const start = (duration=1, delay=0) => {
  return { opacity: 1, x:1, y:1, transition: {...{duration, delay}}}
}