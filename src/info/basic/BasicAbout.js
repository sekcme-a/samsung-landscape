import React, { Component } from 'react';
import Link from 'next/link';
import useData from 'context/data';
import EditButton from 'src/admin/EditButton';

const About = () => {
    const {data} = useData()


    return (
        <>
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-title">
                                <span style={{position:"relative"}}>
                                    {data.info.basicAbout_top_title??"삼성조경"}
                                    <EditButton type="info" item="basicAbout_top_title" text="문구" />
                                </span>
                                <h2 style={{position:"relative"}}>
                                    {data.info.basicAbout_title??"삼성조경의 기본 정보에 대해 소개해드립니다."}
                                    <EditButton type="info" item="basicAbout_title" text="제목" />
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-text">
                                <p style={{position:"relative", fontWeight:"normal"}}>
                                    {data.info.basicAbout_text}
                                    <EditButton type="info" item="basicAbout_text" text="내용" />
                                </p>

                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default About;