import { useEffect, useState } from "react"
import useData from "context/data"

import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Greetings from "src/info/Greetings"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png




const Greet = () =>{
  const {data} = useData()



  return(
    <>

      <PageHeader main="동우그룹" sub="인사말" link="/info/greet"/>

      <Greetings/>
    </>
  )
}

export default Greet