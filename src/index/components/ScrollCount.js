import useScrollCount from "hooks/useScrollCount";
import { Grid } from "@mui/material";

import styles from "../styles/ScrollCount.module.css"


const ScrollCount = () => {

  const animatedItem = useScrollCount(243,0,1)
  const animatedItem2 = useScrollCount(132281,0,1)
  const animatedItem3 = useScrollCount(14877658,0,1)


  return(
      <Grid container justifyContent="center" alignItems="center" className={styles.main_container}>
        <Grid item xs={12} sm={4}> 
          <div className={styles.item_container}>
            <h1 {...animatedItem} />
              <p>관리단지</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}> 
          <div className={styles.item_container}>
            <h1 {...animatedItem2} />
              <p>관리세대</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}> 
          <div className={styles.item_container}>
            <div className={styles.sup_container}><h1 {...animatedItem3} /><h1>m<sup>2</sup></h1></div>
              <p>관리면적</p>
          </div>
        </Grid>

      </Grid>
  )
}

export default ScrollCount