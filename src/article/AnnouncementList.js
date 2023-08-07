import { useEffect, useState } from "react";
import styles from "./AnnouncementList.module.css"
import { useRouter } from "next/router";

import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const ArticleList = ({list}) => {
  const [monitorSize, setMonitorSize] = useState(1000);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const router = useRouter()

  useEffect(()=>{
    setPage(1)
  },[list])

  function formatDateToYYYYMMDD(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

  //***모니터 크기 측정 */
  
  useEffect(() => {
      const handleResize = () => {
      setMonitorSize(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
      window.removeEventListener('resize', handleResize);
      };
  }, []);
  //**모니터 크기 측정 끝 */

  const handleItemclick = (id) => {
    router.push(`/post/announcement/${id}`)
  }

  if(monitorSize>600)
  return(
    <div className={styles.main_container}>
      <div className={styles.header}>
        <div className={styles.no}>No</div>
        <div className={styles.title}>제목</div>
        <div className={styles.published_at}>작성시간</div>
      </div>
      <ul className={styles.list}>
        {list.map((item, index) => (
          <li key={index} onClick={()=>handleItemclick(item.id)}>
            <div className={styles.no}>{list.length-index}</div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.published_at}>{formatDateToYYYYMMDD(item?.publishedAt)}</div>
          </li>
        ))}

      </ul>

      <div className={styles.center} style={{marginTop:"30px"}}>
        <Pagination count={1} page={page} onChange={handleChange} />
      </div>
    </div>
  )
  else
  return(
    <div className={styles.main_container}>
      <ul className={styles.list_mobile}>
        {list.map((item, index) => (
          <li key={index} onClick={()=>handleItemclick(item.id)}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.published_at}>{formatDateToYYYYMMDD(item?.publishedAt)}</div>
          </li>
        ))}

      </ul>

      <div className={styles.center} style={{marginTop:"30px"}}>
        <Pagination count={1} page={page} onChange={handleChange} />
      </div>
    </div>
  )
          
}
export default ArticleList