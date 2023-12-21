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


                        <div className="col-lg-5 col-md-12">
                            <div className="about-text">
                                <p style={{position:"relative", fontWeight:"normal"}}>
                                    {data.main.about2_text ?? "삼성 조경은 높은 수준의 디자인 팀을 보유하고 있습니다. 풍부한 경험과 창의성을 가진 디자이너들은 다양한 환경에서의 조경 디자인에 대한 전문 지식을 보유하고 있습니다."}
                                    <EditButton type="main" item="about2_text" text="내용" />
                                </p>

                                    
                                <Link href="/info/basic">
                                    <a className="read-more-btn">
                                    <i className="flaticon-next" style={{transform:"rotate(180deg)"}}></i> 기본정보 보러가기
                                    </a>
                                </Link>
                            </div>
                        </div>


                        <div className="col-lg-7 col-md-12">
                            <div className="about-title" style={{borderRight: "0 solid black", borderLeft:"1px solid #dfdddf"}}>
                                <span style={{textAlign:'end'}}>회사 소개</span>
                                <h2 style={{position:"relative", textAlign:"end"}}>
                                    {data.main.about2_title ?? "최신의 조경 기술과 혁신적인 해결책을 통해, 지속적인 만족을 제공합니다."}
                                    <EditButton type="main" item="about2_title" text="제목" />
                                </h2>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </>
    );

}

export default About;