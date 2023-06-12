import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

SwiperCore.use([Navigation, Autoplay]) // Swiper

const Banner = () => {
    const [toggler, setToggler] = useState(false);
    return (
		<>
            <FsLightbox
                toggler={ toggler }
                sources={ [
                    'https://www.youtube.com/watch?v=H2n_edWXoBQ',
                ] }
            />

			<div className="home-section">
                <Swiper 
                    navigation={true} 
                    modules={[Navigation]} 
                    className="home-slides"
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="main-banner item-bg1">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="main-banner-content">
                                            <span className="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                                            <h1>깨끗하고 투명한 관리, 동우그룹</h1>

                                            <div className="btn-box">
                                                <Link href="/info/greet" legacyBehavior>
                                                    <a className="default-btn">
                                                        동우그룹 소개<span></span>
                                                    </a>
                                                </Link>

                                                <div
                                                    className="optional-btn"
                                                    onClick={ () => setToggler(!toggler) }
                                                > 
                                                    <i className="flaticon-play-button"></i> 소개영상
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                <div className="banner-footer">
                    <div className="container-fluid p-0">
                        <div className="row m-0 align-items-center">
                            <div className="col-lg-5 col-md-12 p-0">
                                <div className="banner-video">
                                    <div
                                        className="video-btn"
                                        onClick={ () => setToggler(!toggler) }
                                    > 
                                        <i className="flaticon-play-button-1"></i>
                                    </div>
                                
                                    <span>동우그룹 소개</span>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12 p-0">
                                <div className="banner-contact-info">
                                    <ul>
                                        <li>
                                            <i className="flaticon-location"></i>
                                            <span>회사 위치</span>
                                            서울 도봉구 시루봉로 234<br />방학동  622-33
                                        </li>

                                        <li>
                                            <i className="flaticon-email"></i>
                                            <span>이메일 주소</span>
                                            <a href="mailto:abc@naver.com">abc@naver.com</a>
                                            {/* <a href="mailto:support@tuam.com">support@tuam.com</a> */}
                                        </li>

                                        <li>
                                            <i className="flaticon-calendar"></i>
                                            <span>영업시간</span>
                                            월 - 금, 8AM ~ 8PM
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
    );
}

export default Banner;