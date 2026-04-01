import React from "react";
import styles from "./history.module.css";
import PageHeader from "@/components/PageHeader";

const Timeline = () => {
  const historyData = [
    {
      year: "2015",
      title: "창립",
      text: "남산조경 주식회사 창립",
    },
    {
      year: "2015",
      title: "건설업 등록",
      text: "조경식재공사업 등록",
    },
    {
      year: "2017",
      title: "대한전문건설협회 등록",
      text: "조경시설물 설치공사 등록",
    },
    {
      year: "2019",
      title: "소재지 변경",
      text: "경상남도 김해시 이전",
    },
    {
      year: "2022",
      title: "자본금 증자",
      text: "자본금 150,000,000원으로 증자",
    },
    {
      year: "2022",
      title: "신용평가등급 확인",
      text: "BB등급 취득",
    },
    {
      year: "2023",
      title: "인수 및 자본금 증자",
      text: "삼성조경 주식회사로 상호 변경 및 자본금 300,000,000원으로 증자",
    },
    {
      year: "2024",
      title: "자본금 증자",
      text: "자본금 600,000,000원으로 증자",
    },
  ];

  return (
    <div className={styles.wrapper}>
      {/* PageHeader 내부에 <h1>이 포함되어 페이지 대주제 명시 */}
      <PageHeader title="회사 연혁" text="삼성조경의 발자취를 소개합니다." />
      <main>
        {/* SEO: section 태그와 aria-label로 연혁 영역임을 명시 (디자인 영향 없음) */}
        <section className={styles.container} aria-label="삼성조경 연혁 정보">
          <ul className={styles.timeline}>
            {historyData.map((item, index) => (
              <li key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot} />

                {/* 🚩 SEO 최적화: 단순 div 대신 시간 정보를 나타내는 <time> 태그 사용 */}
                <time className={styles.timelineDate} dateTime={item.year}>
                  {item.year}
                </time>

                <div className={styles.timelineContent}>
                  {/* h1(PageHeader) 하위의 h3 구조로 검색 로봇이 계층을 명확히 인식 */}
                  <h2 className={styles.timelineTitle}>{item.title}</h2>
                  <p className={styles.timelineText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Timeline;
