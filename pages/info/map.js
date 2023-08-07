import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import MapCompo from "src/info/Map"
import styles from "src/info/MapIndex.module.css"

const Map = () => {

  const data = {
    locX: 37.668769,
    locY: 127.035654,
    address: `서울특별시 도봉구 시루봉로 234, 동우빌딩 2층
지번: 방학동 622-33`,
    subway: `1호선 방학역 1번 출구 도보 14분`,
    bus: `방학2동주민센터 92m (지선 1128,1139,1167 일반 72-3)
방학2동공영주차장 110m (지선 1128,1139,1167 일반 72-3)`,
  }
  const locX = 37.668769
  const locY = 127.035654
  return(
    <>

      <PageHeader main="동우그룹" sub="오시는 길" link="/info/greet"/>
      
      <div className={styles.main_container}>
        <h1>오시는 길</h1>
        <p>동우그룹으로 오시는 길을 알려드립니다.</p>
        <MapCompo title="동우그룹" locX={data.locX} locY={data.locY}/>
        <div className={styles.title}>찾아오시는 길</div>
          <div className={styles.mainContainer}>
            <div className={styles.container}><div className={styles.item}>- 주 소</div><div className={styles.context}>{data.address}<br/> </div></div>
            <div className={styles.container}><div className={styles.item}>- 지하철 역</div><div className={styles.context}>{data.subway}<br/> </div></div>
            <div className={styles.container}><div className={styles.item}>- 버스정류장</div><div className={styles.context}>{data.bus}</div></div>
          </div>
      </div>

    </>
  )
}

export default Map