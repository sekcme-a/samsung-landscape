import styles from "./OrganizationImage.module.css"

const OrganizationImage = ({data}) => {
  return(
    <div className={styles.main_container}>
      {/* <h1 style={{textAlign:"center", color:"black", fontWeight:'bold'}}>동우그룹의 조직도를 소개합니다.</h1> */}
      <img src={data.imgUrl} />
    </div>
  )
}

export default OrganizationImage