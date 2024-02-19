import { Button, Grid } from "@mui/material"
import styles from "./Post.module.css"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import DownloadIcon from '@mui/icons-material/Download';

const Post = ({data, type, id}) => {
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

  // useEffect(()=>{
  //   console.log
  // },[])


  const createMarkup = () => {
    return {__html: data?.content}
  }


  if(!data)
    return(
      <div style={{marginTop:"100px", marginBottom:"100px"}}>
        <div style={{ display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
          <h6 style={{width:"100vw", textAlign:"center"}}>해당 게시물이 삭제되었거나 존재하지 않습니다.</h6>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{mt:"20px"}}
            onClick={()=>router.back()}
          >
            {`< 이전으로`}
          </Button>
        </div>
      </div>
    )

  return(
    <div className={styles.main_container}>
      <Grid container>
        <Grid item xs={12} md={9}>
          <div className={styles.written_info}>
            <p><strong>게제일:</strong> {formatDateToYYYYMMDD(data?.savedAt?.toDate())} / <strong>작성자:</strong> {data?.author}</p>
          </div>
          <h2>{data?.title}</h2>
          <div className={styles.content_container}>
            <div className="quill_custom_editor" style={{marginTop:"3px"}}>
              <div dangerouslySetInnerHTML={createMarkup()} />
            </div>
          </div>
          
          {monitorSize>=900 &&
            <div className={styles.navbar_container}>
              {/* <h6>{`< 이전글`}</h6> */}
              <h6 onClick={()=>router.push(`/article/${type}`)}>목록으로</h6>
              {/* <h6>{`다음글 >`}</h6> */}
            </div>
          }
        </Grid>
        <Grid item xs={12} md={3} sx={{paddingLeft:"10px"}}>
          <div className={styles.sub_content_title}>첨부파일</div>
          <div className={styles.border_container}>
            <div className={styles.top_border} />
            <div className={styles.background_border} />
          </div>
          {data?.files?.length===0 && <p>첨부파일이 없습니다.</p>}
          {data?.files?.map((item, index) => {
            return(
              <a key={`${index}_${item}`} href={item.url} target="_blank" rel="noreferrer">
                <div className={styles.item}>
                  <p>{item.name}</p>
                  <DownloadIcon />
                </div>
              </a>
            )
          })}
        </Grid>
        {monitorSize<900 &&
            <div className={styles.navbar_container}>
              {/* <h6>{`< 이전글`}</h6> */}
              <h6 onClick={()=>router.push(`/article/${type}`)}>목록으로</h6>
              {/* <h6>{`다음글 >`}</h6> */}
            </div>
          }
      </Grid>
    </div>
  )
}

export default Post