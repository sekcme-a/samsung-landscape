import React, { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import EditButton from "src/admin/EditButton"
import useData from 'context/data';

const Banner = () => {
    const [toggler, setToggler] = useState(false);

    const {data} = useData()


    return (
		<>
            {/* <FsLightbox
                toggler={ toggler }
                sources={ [
                    'https://www.youtube.com/embed/bk7McNUjWgw',
                ] }
            /> */}
 
            <Swiper 
                navigation={true} 
                autoplay={{
                    delay: 6000,
                    pauseOnMouseEnter: true,
                }}
                modules={[Navigation, Autoplay]} 
                className="home-area home-slides"
            >
                <SwiperSlide>
                    <div className="main-banner" style={{backgroundImage:`url(${data.main.banner_bg1})`}}>
                        <EditButton
                            type="main" item="banner_bg1" text="배경이미지 삽입" mode="image" defaultImg="/images/main-banner1.jpg" 
                            style={{position:"absolute", top: 150, right: 100}}
                        />
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="main-banner-content">
                                        <span className="sub-title">
                                            {data.main.banner_subtitle1}
                                            <EditButton type="main" item="banner_subtitle1" text="부제목1" />
                                        </span>
                                        <h1 style={{position:"relative"}}>
                                            {data.main.banner_title1}
                                            <EditButton type="main" item="banner_title1" text="제목1" />
                                        </h1>

                                        <div className="btn-box">
                                            <Link href="/info/greet">
                                                <a className="default-btn">회사소개 보러가기<span></span></a>
                                            </Link>
                                            <Link href="/business/1">
                                                <a className="optional-btn">사업영역 보러가기<span></span></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="main-banner" style={{backgroundImage:`url(${data.main.banner_bg2})`}}>
                        <EditButton
                            type="main" item="banner_bg2" text="배경이미지 삽입" mode="image" defaultImg="/images/main-banner2.jpg" 
                            style={{position:"absolute", top: 150, right: 100}}
                        />
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <div className="main-banner-content">
                                        <span className="sub-title">
                                            {data.main.banner_subtitle2}
                                            <EditButton type="main" item="banner_subtitle2" text="부제목2" />
                                        </span>
                                        <h1 style={{position:"relative"}}>
                                            {data.main.banner_title2}
                                            <EditButton type="main" item="banner_title2" text="제목2" />
                                        </h1>


                                        <div className="btn-box">
                                            <Link href="/info/greet">
                                                <a className="default-btn">회사소개 보러가기<span></span></a>
                                            </Link>
                                            <Link href="/business/1">
                                                <a className="optional-btn">사업영역 보러가기<span></span></a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
		</>
    );
}

export default Banner;