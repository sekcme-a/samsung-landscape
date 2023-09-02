import useScrollCount from "hooks/useScrollCount";
import { Grid } from "@mui/material";

import styles from "../styles/ScrollCount.module.css"

import EditButton from "src/admin/EditButton";
import useData from "context/data";

const ScrollCount = () => {
  const {data} = useData()

  const animatedItem = useScrollCount(data?.main?.scrollCountOne,0,1)
  const animatedItem2 = useScrollCount(data?.main?.scrollCountTwo,0,1)
  const animatedItem3 = useScrollCount(data?.main?.scrollCountThree,0,1)

  return(
      <Grid container justifyContent="center" alignItems="center" className={styles.main_container}>
        <Grid item xs={12} sm={4}> 
          <div className={styles.item_container} style={{position:"relative"}}><EditButton type="main" item="scrollCountOne" text="숫자" />
            <h1 {...animatedItem}/>
              <p style={{position:"relative"}}>{data?.main?.scrollCountOneText}<EditButton type="main" item="scrollCountOneText" text="내용" /></p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}> 
          <div className={styles.item_container} style={{position:"relative"}}><EditButton type="main" item="scrollCountTwo" text="숫자" />
            <h1 {...animatedItem2} />
              <p style={{position:"relative"}}>{data?.main?.scrollCountTwoText}<EditButton type="main" item="scrollCountTwoText" text="내용" /></p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}> 
          <div className={styles.item_container} style={{position:"relative"}}><EditButton type="main" item="scrollCountThree" text="숫자" />
            <div className={styles.sup_container}><h1 {...animatedItem3} /><h1>m<sup>2</sup></h1></div>
              <p style={{position:"relative"}}>{data?.main?.scrollCountThreeText}<EditButton type="main" item="scrollCountThreeText" text="내용" /></p>
          </div>
        </Grid>

      </Grid>
  )
}

export default ScrollCount