import { Grid } from '@mui/material'
import styles from './Greetings.module.css'



const Greetings = ({data}) => {
  return(
    <Grid container className={styles.main_container}>
      <Grid item xs={12} sm={4}>
        <div className={styles.image_container}>
          <img src={data.headImg} />
        </div>

      </Grid>


      <Grid item xs={12} sm={8} className={styles.right_container}>

        <div className={styles.header_container}>
          <div className={styles.line}></div>
          <p>회장 인사말</p>
        </div>

        <div className={styles.content_container}>
          <h3>안녕하십니까<br /> 주식회사 동우개발 <strong>회장 {data.name} </strong>입니다.</h3>
          <p>{data.content}</p>
          <h4>{`(주)동우개발 회장 이육행 배상`}</h4>
          <img src={data.signImg} />
        </div>

      </Grid>

    </Grid>
  )
}

export default Greetings