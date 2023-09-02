import React, { Component, useEffect, useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import useData from 'context/data';

import EditButton from 'src/admin/EditButton';

const Service = () => {
    const {data} = useData()
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
        if(data.main)
        setServiceData([
            {
                imgUrl:data.main.serviceImgUrl0,
                title:data.main.serviceTitle0,
                text:data.main.serviceText0,
                url:data.main.serviceUrl0,
            },
            {
                imgUrl:data.main.serviceImgUrl1,
                title:data.main.serviceTitle1,
                text:data.main.serviceText1,
                url:data.main.serviceUrl1,
            },
            {
                imgUrl:data.main.serviceImgUrl2,
                title:data.main.serviceTitle2,
                text:data.main.serviceText2,
                url:data.main.serviceUrl2,
            },
            {
                imgUrl:data.main.serviceImgUrl3,
                title:data.main.serviceTitle3,
                text:data.main.serviceText3,
                url:data.main.serviceUrl3,
            },
            {
                imgUrl:data.main.serviceImgUrl4,
                title:data.main.serviceTitle4,
                text:data.main.serviceText4,
                url:data.main.serviceUrl4,
            },
        ])
    },[data?.main])


        return (
            <>
                <section className="services-area ptb-100 bg-f8f8f8">
                    <div className="container">
                        <div className="section-title">
                            <h2>사업분야</h2>
                            <p style={{fontWeight:"normal", position:"relative"}}>{data.main.serviceSubtitle}<EditButton type="main" item="serviceSubtitle" text="부제목" /></p>
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
                                        
                                        <div className="services-box">
                                            <img src={item.imgUrl} alt={item.title} style={{position:"relative"}} />

                                            <div className="services-content" style={{position:"relative"}}>
                                                <EditButton type="main" item={`serviceUrl${index}`} text="이동할 주소 (https나 http를 포함한 전체주소)" />
                                                <h3>
                                                    <Link href={item.url ? item.url : "/" }>
                                                        <a>{item.title} {console.log(item.url)}</a>
                                                    </Link>
                                                    <EditButton type="main" item={`serviceTitle${index}`} text="제목" />
                                                </h3>
                                                <p style={{fontWeight:"normal", position:"relative"}}>{item.text}<EditButton type="main" item={`serviceText${index}`} text="내용" /></p>
                                            </div><EditButton type="main" item={`serviceImgUrl${index}`} text="이미지" mode="image" defaultImg="/aboutUs1.jpg"/>
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