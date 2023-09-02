import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import MapCompo from "src/info/Map"
import styles from "src/info/MapIndex.module.css"
import { useState, useEffect } from "react"
import useData from "context/data"
import EditButton from "src/admin/EditButton"
const Map = () => {
  const {data, fetch_data} = useData()
  const [fetchedData, setFetchedData] = useState({
    locX: 37.668769,
    locY: 127.035654,
    address: `서울특별시 도봉구 시루봉로 234, 동우빌딩 2층
지번: 방학동 622-33`,
    subway: `1호선 방학역 1번 출구 도보 14분`,
    bus: `방학2동주민센터 92m (지선 1128,1139,1167 일반 72-3)
방학2동공영주차장 110m (지선 1128,1139,1167 일반 72-3)`,
  })

  useEffect(()=>{
    if(!data.map.fetched) fetch_data("map")
  },[])

  useEffect(() => {
    if(data?.map?.fetched){
      setFetchedData({
        ...data.map
      })
    }
  },[data?.map])


  return(
    <>

      <PageHeader main="동우그룹" sub="오시는 길" link="/info/greet"/>
      
      <div className={styles.main_container}>
        <h1>오시는 길</h1>
        <p style={{position:"relative"}}>{fetchedData.subtitle} <EditButton type="map" item="subtitle" text="부제목"/></p>
        <MapCompo title="동우그룹" locX={fetchedData.locX} locY={fetchedData.locY}/>
        <div className={styles.title} style={{position:"relative"}}><EditButton type="map" item="subtitle" mode="map" text="경도/위도"/>찾아오시는 길</div>
          <div className={styles.mainContainer}>

            <div className={styles.container}>
              <div className={styles.item} style={{position:"relative"}}>
                - 주 소 <EditButton type="map" item="address" text="주소"/>
              </div>
              <div className={styles.context}>
                {fetchedData.address}<br/>
              </div>
            </div>


            <div className={styles.container}>
              <div className={styles.item} style={{position:"relative"}}>
                - 지하철 역 <EditButton type="map" item="subway" text="지하철 역 "/>
              </div>
              <div className={styles.context}>
                {fetchedData.subway}<br/>
              </div>
            </div>


            <div className={styles.container}>
              <div className={styles.item} style={{position:"relative"}}>
                - 버스정류장 <EditButton type="map" item="bus" text="버스정류장"/>
              </div>
              <div className={styles.context}>
                {fetchedData.bus}
              </div>
            </div>

          </div>
      </div>

    </>
  )
}

export default Map