import Article from "./Article"

import { Grid } from "@mui/material"

const ArticleList = ({list, type}) => {
  
  return(
    <Grid container spacing={3} sx={{mt:"20px"}}>
      {list.map((item, index) => {
        return(
          <Grid item xs={12} sm={6} md={4} lg={3}  key={index}>
            <Article data={item} type={type}/>
          </Grid>
        )
      })}
    </Grid>
  )
}
export default ArticleList