import React, { Component, useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Service = () => {
    const [serviceData, setServiceData] = useState([
        {
            imgUrl:"/aboutUs1.jpg",
            title:"공동주택관리",
            text:"동우개발의 공동주택관리서비스를 소개합니다.",
            url:"/management/housing"
        },
        {
            imgUrl:"/aboutUs1.jpg",
            title:"빌딩종합관리",
            text:"동우개발의 빌딩종합관리서비스를 소개합니다.",
            url:"/management/building"
        },
        {
            imgUrl:"/aboutUs1.jpg",
            title:"부동산자산관리",
            text:"동우개발의 부동산자산관리서비스를 소개합니다.",
            url:"/management/estate"
        },
        {
            imgUrl:"/aboutUs1.jpg",
            title:"인사관리",
            text:"동우개발의 인사관리서비스를 소개합니다.",
            url:"/management/hrd"
        },
        {
            imgUrl:"/aboutUs1.jpg",
            title:"회계관리",
            text:"동우개발의 회계관리서비스를 소개합니다.",
            url:"/management/financial"
        },
        
    ])
    useEffect(()=>{

    },[])
        return (
            <>
                <section className="services-area ptb-100 bg-f8f8f8">
                    <div className="container">
                        <div className="section-title">
                            <h2>사업분야</h2>
                            <p style={{fontWeight:"normal"}}>동우그룹의 다양한 사업분야를 소개합니다.</p>
                        </div>

                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            autoplay={{
                                delay: 2500,
                                // pauseOnMouseEnter: true,
                            }}
                            modules={[Pagination, Autoplay]}
                            className="main-services-slides"
                        >
                            {serviceData.map((item, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <div className="services-box" style={{cursor:"pointer"}}>
                                            <img src={item.imgUrl} alt={item.title} />

                                            <div className="services-content">
                                                <h3>
                                                    <Link href={item.url}>
                                                        <a>{item.title}</a>
                                                    </Link>
                                                </h3>
                                                <p style={{fontWeight:"normal"}}>{item.text}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                           
                        </Swiper> 
                    </div>
                </section>
            </>
        );
    }


export default Service;