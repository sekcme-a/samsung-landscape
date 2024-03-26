import { useEffect } from "react"
import Navbar from "src/public/Navbar"
import PageHeader from "../../src/public/PageHeader"

import useData from "context/data"
import { Grid } from "@mui/material"

import Business from "src/business/three/Business"
import HeadMeta from 'src/public/HeadMeta';
const One = () => {
  const {data, fetch_data} = useData()

  useEffect(()=>{
      if(!data.business.fetched) fetch_data("business")
  },[])


  return(
    <>
          <HeadMeta
        title="조경설계(정원설계) - 삼성조경"
        description="삼성조경의 조경설계는 창의적 디자인과 기술적 전문성, 환경 친화적이고 지속 가능한 접근, 고객과의 긴밀한 협력을 위해 노력합니다."
        url="https://xn--289a529abkak1w.kr/business/design"
      />

      
      <PageHeader main="사업영역" sub="조경설계(정원설계)" type="business" item="three_header_title" />
      <Business />
    </>
  )
}

export default One