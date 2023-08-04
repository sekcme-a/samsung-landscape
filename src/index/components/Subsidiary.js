import React from 'react';
import styles from '../styles/Subsidiary.module.css';
import { Button, Grid } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

//1024*819 사이즈 추천
const Card = () => {
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



  const onButtonClick = (num) => {
    // Open Naver in a new tab
    if(num===1)
      window.open('https://www.naver.com', '_blank');
  };



  return (
    <section className="services-area ptb-100 bg-f8f8f8">
      <div className="section-title">
        <h2>계열사</h2>
        <p style={{fontWeight:"normal"}}>동우그룹의 계열사를 소개합니다.</p>
      </div>
    <Grid container justifyContent="center" width="100%" style={{padding: "20px 0 0 0"}} >
      <Grid item xs={12} sm={6} md={4} display="flex" justifyContent={monitorWidth>1190 ? "end" : "center"} style={{padding:"20px 0"}}>
        <div className={styles.container1}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img
                src='/example-logo.png'
                alt="동우개발 로고"
              />
              {/* <Image width={200} height={200} src="/logo-black.png" alt="동우개발 로고" /> */}
            </div>
            <div className={styles.content}>
              <h3>동우개발</h3>
              <p>
                DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly
              </p>
              <Button onClick={()=>onButtonClick(1)} style={{ color: '#FF5D22' }} >홈페이지로 이동</Button>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} display="flex" justifyContent="center" style={{padding:"20px 0"}}>
        <div className={styles.container2}>
          <div className={styles.card}>
            <div className={styles.image}>
            <img
                src='/example-logo.png'
                alt="혜진종합관리 로고"
              />
            </div>
            <div className={styles.content}>
              <h3>혜진종합관리</h3>
              <p>
                DIn publishing and graphic design, Lorem ipsum is a placeholder text  
              </p>
              <Button onClick={()=>onButtonClick(1)} style={{ color: '#FF5D22' }} >홈페이지로 이동</Button>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} display="flex" justifyContent={monitorWidth>1190 ? "start" : "center"} style={{padding:"20px 0"}}>
        <div className={styles.container3}>
          <div className={styles.card}>
            <div className={styles.image}>
            <img
                src='/example-logo.png'
                alt="삼성조경 로고"
              />
            </div>
            <div className={styles.content}>
              <h3>삼성조경</h3>
              <p>
                DIn publishing and graphic design, Lorem ipsum is a placeholder text commonly used
              </p>
              <Button onClick={()=>onButtonClick(1)} style={{ color: '#FF5D22' }} >홈페이지로 이동</Button>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
    </section>
  );
};

export default Card;
