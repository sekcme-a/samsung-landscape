import { useState, useEffect } from "react"
import styles from "./OrganizationImage.module.css"
import useData from "context/data"
import EditButton from "src/admin/EditButton"


const OrganizationImage = () => {
  const {data, fetch_data} = useData()
  const [fetchedData, setFetchedData] = useState({
    imgUrl: "https://cdn.imweb.me/thumbnail/20230517/ecca9272490f6.jpg"
  })

  useEffect(()=>{
    if(!data.organization.fetched) fetch_data("organization")
  },[])

  useEffect(() => {
    if(data?.organization?.fetched){
      setFetchedData({
        ...data.organization
      })
    }
  },[data?.organization])


  return(
    <div className={styles.main_container} style={{position:"relative"}}>
      {/* <h1 style={{textAlign:"center", color:"black", fontWeight:'bold'}}>동우그룹의 조직도를 소개합니다.</h1> */}
      <EditButton type="organization" item="imgUrl" text="조직도 이미지 삽입" mode="image" defaultImg="https://cdn.imweb.me/thumbnail/20230517/ecca9272490f6.jpg"/>
      <img src={fetchedData.imgUrl} />
    </div>
  )
}

export default OrganizationImage