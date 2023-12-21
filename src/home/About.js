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
                                <span>인사말</span>
                                <h2 style={{position:"relative"}}>
                                    {data.main.about_title}
                                    <EditButton type="main" item="about_title" text="제목" />
                                </h2>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-text">
                                <p style={{position:"relative", fontWeight:"normal"}}>
                                    {data.main.about_text}
                                    <EditButton type="main" item="about_text" text="내용" />
                                </p>

                                    
                                <Link href="/info/greet">
                                    <a className="read-more-btn">
                                        인사말 보기 <i className="flaticon-next"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

export default About;