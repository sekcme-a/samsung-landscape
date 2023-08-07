
import { useEffect, useState } from "react"
import styles from "./Announcement.module.css"
import { TextField } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import Pagination from '@mui/material/Pagination';
import ArticleList from "./ArticleList"

const Announcement = ({list, type, typeText}) => {
  const [input, setInput]= useState("")
  const [filteredList, setFilteredList] = useState(list)
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(()=>{
    setFilteredList(list)
    setPage(1)
  },[list])

  useEffect(()=>{
    if(input==="")
      setFilteredList(list)
  },[input])


  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const filteredData = filterData(list, input)
      setFilteredList(filteredData)
    }
  };
  const filterData = (list, input) => {

    return list.filter(item => {
      return Object.values(item).some(value =>
        String(value).toLowerCase().includes(input.toLowerCase())
      );
    });
  }


  return(
    <div className={styles.main_container}>
      <h1>{typeText}</h1>
      <div className={styles.search_container}>
        <p>{list.length===filteredList.length ? `총 ${filteredList.length}개의 ${typeText}가 있습니다.` : `총 ${filteredList.length}개의 ${typeText}가 검색되었습니다.`}</p>
        <TextField
          label="Search"
          variant="outlined"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          size="small"
          onKeyDown={handleKeyPress}
          InputProps={{
            endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
          }}
          className={styles.search_box}
        />
      </div>
      <ArticleList list={filteredList} type={type}/>
      <div style={{marginTop:"30px", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <Pagination count={1} page={page} onChange={handleChange} />
      </div>
    </div>
  )
}

export default Announcement
