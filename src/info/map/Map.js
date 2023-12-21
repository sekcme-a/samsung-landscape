import React, {useEffect, useState} from 'react';
import EditButton from 'src/admin/EditButton';
import useData from 'context/data';
import KakaoMap from './KakaoMap';

const Map = () => {
  const {data} = useData()

    return (
        <>
            <section className="contact-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title">
                                <span className="sub-title" style={{position:"relative"}}>
                                    {data.info.map_title_top ?? "삼성조경"}
                                    <EditButton type="info" item="map_title_top" text="문구" />
                                </span>
                                <h2 style={{position:"relative"}}>
                                    {data.info.map_title ?? "찾아오는 길"}
                                    <EditButton type="info" item="map_title" text="제목" />
                                </h2>
                                <p style={{fontWeight:"normal"}}>
                                    {data.info.map_subtitle ?? "삼성조경으로 찾아오는 길을 안내드립니다."}
                                    <EditButton type="info" item="map_subtitle" text="내용" />
                                </p>
                            </div>

                            <div className="contact-info">
                                <ul className="contact-list">
                                    <li style={{whiteSpace:"pre-line", paddingLeft:"0"}}>
                                        <span>주소</span>
                                        {data.info.map_address}<EditButton type="info" item="map_address" text="주소" />
                                    </li>

                                    <li style={{whiteSpace:"pre-line", paddingLeft:"0"}}>
                                        <span>지하철</span>
                                        {data.info.map_subway}<EditButton type="info" item="map_subway" text="지하철" />
                                        {/* fax@email.com */}
                                    </li>

                                    <li style={{whiteSpace:"pre-line", paddingLeft:"0"}}>
                                        <span>버스</span>
                                        {data.info.map_bus}<EditButton type="info" item="map_bus" text="버스" />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                          <div className='section-title' style={{position:"relative", marginTop:'40px'}}>
                          <EditButton type="info" item="map" mode="map" text="경도/위도"/>
                          {data.info.map_locX && <KakaoMap title="삼성조경" locX={data.info.map_locX} locY={data.info.map_locY}/>}
                            {/* <div className="section-title">
                                <span className="sub-title">{type==="type2" ? "건의할 내용이 있으신가요?":"문의할 내용이 있으신가요?"}</span>
                                <h2>{type==="type2" ? "건의사항 작성" : "문의 작성"}</h2>
                                <p style={{fontWeight:"normal"}}>
                                  {type==="type2" ? "삼성조경에 건의할 내용을 작성해주세요. 빠른 시일내에 답변해드리겠습니다.":"문의할 내용을 작성해주세요. 빠른 시일내에 답변해드리겠습니다."}</p>
                            </div> */}
                          </div>
                        </div>
                    </div>
                </div>
                
                {/* <div className="bg-map">
                    <img src="/images/bg-map.png" alt="image" />
                </div> */}
            </section>
        </>
    );
};

export default Map;
