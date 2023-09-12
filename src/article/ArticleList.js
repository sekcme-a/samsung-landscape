import Article from "./Article"
import { useState, useEffect } from "react"
import { Grid } from "@mui/material"
import { Pagination } from "@mui/material"

const countPerPage = 8

const ArticleList = ({list, type}) => {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(1)
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [listForThisPage, setListForThisPage] = useState([])


  //원래 페이지로 이동
  // useEffect(()=>{
  //   const prevPage = sessionStorage.getItem(`${type}_page`)
  //   if(prevPage){
  //     setPage(prevPage)
  //     const listForCurrentPage = list?.slice((prevPage-1)*countPerPage, (countPerPage*prevPage))
  //     setListForThisPage(listForCurrentPage)
  //     sessionStorage.removeItem(`${type}_page`)
  //   }
  // },[])

  useEffect(()=>{
    setPage(1)
    if(list?.length%(countPerPage)===0)  setCount(list?.length/countPerPage)
    else setCount((Math.trunc(list?.length/(countPerPage+1))+1))
  },[list])



  //페이지에 따라 보이는 게시물 변경
  useEffect(()=> {
    const listForCurrentPage = list?.slice((page-1)*countPerPage, (countPerPage*page))
    setListForThisPage(listForCurrentPage)
  },[page, list])
  
  return(
    <>
      <Grid container spacing={3} sx={{mt:"20px"}}>
        {listForThisPage?.map((item, index) => {
          return(
            <Grid item xs={12} sm={6} md={4} lg={3}  key={index}>
              <Article data={item} type={type}/>
            </Grid>
          )
        })}
      </Grid>
      <div style={{marginTop:"30px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Pagination count={count} page={page} onChange={handleChange} />
      </div>
    </>
  )
}
export default ArticleList