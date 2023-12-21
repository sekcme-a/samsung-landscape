import React, { useEffect } from 'react'
import style from "./KakaoMap.module.css"
import Script from "next/script"
import Link from "next/link"
import { Map, MapMarker } from "react-kakao-maps-sdk"


//api 가이드 : https://velog.io/@tpgus758/React%EC%97%90%EC%84%9C-Kakao-map-API-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
//x,y 좌표 구하기 : http://apis.map.kakao.com/web/sample/addMapClickEventWithMarker/

//javascript api key 넣기 :
  // <Script
  //   src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=너의API키&libraries=services,clusterer&autoload=false`}
  //   strategy="beforeInteractive"
  // />
  // 너의API키에 js api key 를 넣고 위의 Script를 _document.js 의 Head 태그 안에 넣는다.
const KakaoMap =({locX, locY, title})=>{
      
  return (
    <div className={style.map} style={{color:'red'}}>
      <Map
        center={{ lat: locX, lng: locY }}
        style={{ width: "100%", height: "360px" }}
      >
        <MapMarker position={{ lat: locX, lng: locY }}>
          <div className={style.marker}>{title}<br />
            <Link passhref href={`https://map.kakao.com/link/map/${title},${locX},${locY}`}><a target="_blank">큰지도보기</a></Link> /
            <Link passhref href={`https://map.kakao.com/link/to/${title},${locX},${locY}`}><a target="_blank"> 길찾기</a></Link>
          </div>
        </MapMarker>
      </Map>
    </div>
    )
}

export default KakaoMap;