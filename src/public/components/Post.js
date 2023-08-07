import { Grid } from "@mui/material"
import styles from "./Post.module.css"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import DownloadIcon from '@mui/icons-material/Download';

const Post = ({data, type}) => {
  const router = useRouter()

  function formatDateToYYYYMMDD(date) {
    const year = date?.getFullYear();
    const month = String(date?.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date?.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }

  //***모니터 크기 측정 */
  const [monitorSize, setMonitorSize] = useState(1000);
  
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


  return(
    <div className={styles.main_container}>
      <Grid container>
        <Grid item xs={12} md={9}>
          <div className={styles.written_info}>
            <p><strong>게제일:</strong> {formatDateToYYYYMMDD(data?.publishedAt)} / <strong>작성자:</strong> {data?.author}</p>
          </div>
          <h2>{data?.title}</h2>
          {type==="24h" && <iframe width="560" height="315" src="https://www.youtube.com/embed/itauR7zEyDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
          <p className={styles.content_container}>{data?.content}</p>
          
          {monitorSize>=900 &&
            <div className={styles.navbar_container}>
              <h6>{`< 이전글`}</h6>
              <h6 onClick={()=>router.push(`/article/${type}`)}>목록으로</h6>
              <h6>{`다음글 >`}</h6>
            </div>
          }
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={styles.sub_content_title}>첨부파일</div>
          <div className={styles.border_container}>
            <div className={styles.top_border} />
            <div className={styles.background_border} />
          </div>
          {data?.attach.length===0 && <p>첨부파일이 없습니다.</p>}
          {data?.attach.map((item, index) => {
            return(
              <div className={styles.item} key={index} onClick={()=>alert("테스트용 첨부파일")}>
                <p>선거관리업무 안내서.pdf</p>
                <DownloadIcon />
              </div>
            )
          })}
        </Grid>
        {monitorSize<900 &&
            <div className={styles.navbar_container}>
              <h6>{`< 이전글`}</h6>
              <h6 onClick={()=>router.push(`/article/${type}`)}>목록으로</h6>
              <h6>{`다음글 >`}</h6>
            </div>
          }
      </Grid>
    </div>
  )
}

export default Post