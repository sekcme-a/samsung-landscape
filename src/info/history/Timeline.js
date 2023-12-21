import React from 'react';
import styles from './Timeline.module.css';
import useData from 'context/data';
import { useEffect, useState } from 'react';
import EditButton from 'src/admin/EditButton';

const Timeline = () => {
  const {data, fetch_data} = useData()



  return (
    <div className={styles.containerFluid}>
      <div className={styles.row}>
        <div className={styles.exampleTitle}>
          <h2 style={{position:"relative"}}>{data.info.history_title??"회사 연혁"}<EditButton type="info" item="history_title" text="제목"/></h2>
          <p style={{position:"relative", textAlign:"center"}}>{data.info.history_subtitle??"삼성조경의 회사 연혁을 소개합니다."}<EditButton type="info" item="history_subtitle" text="부제목"/></p>
        </div>
        <div className={styles.colXs10}>
          <ul className="timeline" style={{position:"relative"}}>
            <EditButton type="info" item="history_timeline_list" text="타임라인" mode="arrOfObj"/>
            {data?.info?.history_timeline_list?.map((event, eventIndex) => (
              <li key={eventIndex} className={styles.timelineItem}>
                <div className={styles.timelineInfo}>
                  <span>{event.date}</span>
                </div>
                <div className={styles.timelineMarker}></div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{event.title}</h3>
                  <p>{event.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;

