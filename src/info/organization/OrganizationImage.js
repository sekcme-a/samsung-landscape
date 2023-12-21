import { useState, useEffect } from "react"
import styles from "./OrganizationImage.module.css"
import useData from "context/data"
import EditButton from "src/admin/EditButton"


const OrganizationImage = () => {
  const {data, fetch_data} = useData()
  const [fetchedData, setFetchedData] = useState({
    imgUrl: "https://cdn.imweb.me/thumbnail/20230517/ecca9272490f6.jpg"
  })

  return(
    <div className={styles.main_container}>
      <h4 style={{textAlign:"center", color:"black", fontWeight:'bold', position:"relative"}}>
        {data.info.organization_title ?? "삼성조경의 조직도를 소개합니다."}
        <EditButton type="info" item="organization_title" text="제목" />
      </h4>
      <p style={{position:"relative", textAlign:"center"}}>
        {data.info.organization_text??
        `각자의 역할과 업무에 대한 중요성을 이해하면서도, 우리는 하나의 큰 팀으로서 상호간에 지지하고 배려하는 분위기를 유지하고 있습니다. 각자의 강점을 살려 효과적으로 협업하며,
         다양한 배경과 경험을 존중하고 활용함으로써 더 나은 아이디어와 결과물을 창출하고 있습니다.`}
         <EditButton type="info" item="organization_text" text="내용" />
      </p>
      <div style={{position:"relative", width:"1px", height:"1px"}} >
        <EditButton type="info" item="organization_img" text="조직도 이미지 삽입" mode="image" defaultImg="/image/organization.png"/>
      </div>
      <img src={data.info.organization_img} />
    </div>
  )
}

export default OrganizationImage