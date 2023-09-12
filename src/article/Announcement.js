import { useEffect, useState } from "react"
import styles from "./Announcement.module.css"
import { TextField } from "@mui/material"
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import AnnouncementList from "./AnnouncementList"

const Announcement = ({list}) => {
  const [input, setInput]= useState("")
  const [filteredList, setFilteredList] = useState(list)

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
      <h1>공지사항</h1>
      <div className={styles.search_container}>
        <p>{list?.length===filteredList?.length ? `총 ${filteredList?.length}개의 공지사항이 있습니다.` : `총 ${filteredList?.length}개의 공지사항이 검색되었습니다.`}</p>
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
      <AnnouncementList list={filteredList} countPerPage={10}/>
    </div>
  )
} 

export default Announcement