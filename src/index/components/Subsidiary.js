import React from 'react';
import styles from '../styles/Subsidiary.module.css';
import { Button, Grid } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import EditButton from 'src/admin/EditButton';
import useData from 'context/data';

//1024*819 사이즈 추천
const Card = () => {
  const {data} = useData()
  const [monitorWidth, setMonitorWidth] = useState(1200);

  const handleResize = () => {
    setMonitorWidth(window.innerWidth);
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 이벤트 리스너를 추가합니다.
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 배열을 전달하여 처음 한 번만 이벤트 리스너를 추가합니다.



  const onButtonClick = (url) => {
      window.open(url, '_blank');
  };



  return (
    <section className="services-area ptb-100 bg-f8f8f8">
      <div className="section-title">
        <h2>계열사</h2>
        <p style={{fontWeight:"normal", position:"relative"}}>{data?.main?.subSidiarySubtitle}<EditButton type="main" item="subSidiarySubtitle" text="부제목" />   </p>
      </div>
    <Grid container justifyContent="center" width="100%" style={{padding: "20px 0 0 0"}} >
      <Grid item xs={12} sm={6} md={4} display="flex" justifyContent={monitorWidth>1190 ? "end" : "center"} style={{padding:"20px 0"}}>
        <div className={styles.container1}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src={data?.main?.subSidiaryImg1}
                alt="동우개발 로고"
              /><EditButton type="main" item="subSidiaryImg1" text="이미지 삽입" mode="image" defaultImg="/example-logo.png"/>
              {/* <Image width={200} height={200} src="/logo-black.png" alt="동우개발 로고" /> */}
            </div>
            <div className={styles.content}>
              <h3>{data?.main?.subSidiaryTitle1}<EditButton type="main" item="subSidiaryTitle1" text="제목" /></h3>
              <p style={{position:"relative"}}>
                {data?.main?.subSidiaryContent1}<EditButton type="main" item="subSidiaryContent1" text="내용 " />
              </p>
              <Button onClick={()=>onButtonClick(data?.main?.subSidiaryUrl1)} style={{ color: '#FF5D22' , position:"relative" }} >홈페이지로 이동<EditButton type="main" item="subSidiaryUrl1" text="이동할 링크(https나 http가 포함되어야합니다." /></Button>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center" style={{padding:"20px 0"}}>
        <div className={styles.container2}>
          <div className={styles.card}>
            <div className={styles.image}>
            <img
                src={data?.main?.subSidiaryImg2}
                alt="혜진종합관리 로고"
              /><EditButton type="main" item="subSidiaryImg2" text="이미지 삽입" mode="image" defaultImg="/example-logo.png"/>
            </div>
            <div className={styles.content}>
              <h3>{data?.main?.subSidiaryTitle2}<EditButton type="main" item="subSidiaryTitle2" text="제목" /></h3>
              <p style={{position:"relative"}}>
                {data?.main?.subSidiaryContent2}<EditButton type="main" item="subSidiaryContent2" text="내용 " />
              </p>
              <Button onClick={()=>onButtonClick(data?.main?.subSidiaryUrl1)} style={{ color: '#FF5D22' , position:"relative" }} >홈페이지로 이동<EditButton type="main" item="subSidiaryUrl2" text="이동할 링크(https나 http가 포함되어야합니다." /></Button>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} display="flex" justifyContent={monitorWidth>1190 ? "start" : "center"} style={{padding:"20px 0"}}>
        <div className={styles.container3}>
          <div className={styles.card}>
            <div className={styles.image}>
            <img
                src={data?.main?.subSidiaryImg3}
                alt="삼성조경 로고"
              /><EditButton type="main" item="subSidiaryImg3" text="이미지 삽입" mode="image" defaultImg="/example-logo.png"/>
            </div>
            <div className={styles.content}>
              <h3>{data?.main?.subSidiaryTitle3}<EditButton type="main" item="subSidiaryTitle3" text="제목" /></h3>
              <p style={{position:"relative"}}>
                {data?.main?.subSidiaryContent3}<EditButton type="main" item="subSidiaryContent3" text="내용 " />
              </p>
              <Button onClick={()=>onButtonClick(data?.main?.subSidiaryUrl1)} style={{ color: '#FF5D22' , position:"relative" }} >홈페이지로 이동<EditButton type="main" item="subSidiaryUrl3" text="이동할 링크(https나 http가 포함되어야합니다." /></Button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
    </section>
  );
};

export default Card;
