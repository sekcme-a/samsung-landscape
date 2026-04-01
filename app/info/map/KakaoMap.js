"use client"; // App Router에서 클라이언트 사이드 라이브러리 사용 시 필수

import React from "react";
import styles from "./KakaoMap.module.css";
import Link from "next/link";
import { Map, MapMarker } from "react-kakao-maps-sdk";
const KakaoMap = ({ locX, locY, title }) => {
  return (
    <div className={styles.map} style={{ color: "red" }}>
      <Map
        center={{ lat: locX, lng: locY }}
        style={{ width: "100%", height: "360px" }}
        level={3} // 지도 확대 레벨 추가
      >
        <MapMarker position={{ lat: locX, lng: locY }}>
          {/* 마커 내부 정보창 스타일링 */}
          <div
            className={styles.marker}
            style={{ padding: "5px", color: "#000" }}
          >
            {title}
            <br />

            {/* Next.js 13+ Link: <a> 태그 없이 직접 사용 */}
            <Link
              href={`https://map.kakao.com/link/map/${title},${locX},${locY}`}
              target="_blank"
              style={{ fontSize: "12px", color: "blue" }}
            >
              큰지도보기
            </Link>
            {" / "}
            <Link
              href={`https://map.kakao.com/link/to/${title},${locX},${locY}`}
              target="_blank"
              style={{ fontSize: "12px", color: "blue" }}
            >
              길찾기
            </Link>
          </div>
        </MapMarker>
      </Map>
    </div>
  );
};

export default KakaoMap;
