import React, { Component } from 'react';
import Link from 'next/link';
import useData from 'context/data';
import EditButton from 'src/admin/EditButton';

const OurMission = () => {

    const {data} = useData()


    return (
        <>
            <section className="our-mission-area">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-lg-3 col-md-6 p-0">
                            <div className="mission-image"  style={{backgroundImage:`url(${data.main.ourMission_bg1})`, position:"relative"}}>
                                <img src={data.main.ourMission_bg1} alt="삼성조경 사업실적"  />
                                <EditButton
                                    type="main" item="ourMission_bg1" text="배경이미지 삽입" mode="image" defaultImg="/images/whyChooseUs_bg.jpg" 
                                    style={{position:"absolute", top: 150, right: 100}}
                                />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 p-0">
                            <div className="mission-text">
                                <div className="icon">
                                    <i className="flaticon-target"></i>
                                </div>

                                <h3>전체 실적</h3>
                                <p style={{fontWeight:"normal", position:"relative"}}>
                                    {data.main.ourMission_text1 ?? "삼성조경은 지난 몇 십 년 동안 조경 디자인 및 건설 분야에서 높은 평가를 받아왔습니다. 업계에서 선도적인 위치를 차지하며, 고객들에게 탁월한 서비스를 제공하는 데 주력해왔습니다."}
                                    <EditButton type="main" item="ourMission_text1" text="내용" />
                                </p>

                                <Link href="/article/all">
                                    <a className="default-btn">보러가기<span></span></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 p-0">
                            <div className="mission-image"  style={{backgroundImage:`url(${data.main.ourMission_bg2})`, position:"relative"}}>
                                <img src={data.main.ourMission_bg2} alt="삼성조경 사업실적"  />
                                <EditButton
                                    type="main" item="ourMission_bg2" text="배경이미지 삽입" mode="image" defaultImg="/images/whyChooseUs_bg.jpg" 
                                    style={{position:"absolute", top: 150, right: 100}}
                                />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 p-0">
                            <div className="mission-text">
                                <div className="icon">
                                    <i className="flaticon-award"></i>
                                </div>

                                <h3>시공/관리</h3>
                                <p style={{fontWeight:"normal", position:"relative"}}>
                                    {data.main.ourMission_text2 ?? "삼성조경은 지난 몇 십 년 동안 조경 디자인 및 건설 분야에서 높은 평가를 받아왔습니다. 삼성조경의 시공/관리 사업실적을 소개합니다."}
                                    <EditButton type="main" item="ourMission_text2" text="내용" />
                                </p>

                                <Link href="/article/construction">
                                    <a className="default-btn">보러가기 <span></span></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OurMission;