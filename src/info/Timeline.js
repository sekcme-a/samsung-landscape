import React from 'react';
import styles from './Timeline.module.css';

const Timeline = ({ timeline }) => {
  return (
    <div className={styles.containerFluid}>
      {timeline.map((section, index) => (
        <div key={index} className={index % 2 === 0 ? styles.row : styles.rowEven}>
          <div className={styles.exampleTitle}>
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
          <div className={styles.colXs10}>
            <ul className={section.timelineLayout}>
              {section.events.map((event, eventIndex) => (
                <li key={eventIndex} className={styles.timelineItem}>
                  <div className={styles.timelineInfo}>
                    <span>{event.date}</span>
                  </div>
                  <div className={styles.timelineMarker}></div>
                  <div className={styles.timelineContent}>
                    <h3 className={styles.timelineTitle}>{event.title}</h3>
                    <p>{event.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
