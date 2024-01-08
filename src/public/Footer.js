import React, { Component } from 'react';
import Link from 'next/link';
import useData from 'context/data';
import EditButton from 'src/admin/EditButton';

const Footer = () => {
    const {data} = useData()

    return (
        <>
            <footer className="footer-area" style={{paddingBottom:"60px"}}>
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a style={{position:"relative"}}>
                                            <img src={data.footer.logo_img} alt="image" style={{width:"140px", backgroundColor:"white"}} />
                                            <EditButton type="footer" item="logo_img" text="로고 이미지"
                                            mode="image" defaultImg="/images/logo.png"
                                        />
                                        </a>
                                    </Link>

                                    <p style={{position:"relative"}}>
                                        {data.footer.content ?? "삼성조경은 항상 디자인과 기술력에 중점을 두어 혁신적인 프로젝트를 선보이고 있습니다. 최신 조경 기술을 적극적으로 도입하여 친환경적이고 지속 가능한 환경을 조성하는데 앞장서고 있습니다." }
                                        <EditButton type="footer" item="content" text="내용" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>바로가기</h3>

                                <ul className="footer-quick-links">
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/info/greet">
                                            <a>인사말</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/info/basic">
                                            <a>기본정보</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/info/history">
                                            <a>회사연혁</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/business/1">
                                            <a>조경식재공사</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/business/2">
                                            <a>조경시설물설치공사</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/business/3">
                                            <a>조경설계</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/article/all">
                                            <a>전체실적</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact Info</h3>

                                <ul className="footer-contact-info">
                                    <li style={{position:"relative"}}><span>위치:</span> 
                                         {data.footer.location}
                                        <EditButton type="footer" item="location" text="위치" />
                                    </li>
                                    <li style={{position:"relative"}}><span>이메일:</span> 
                                        <a href={`mailto:${data.footer.email}`}>{data.footer.email}</a>
                                        <EditButton type="footer" item="email" text="이메일" />
                                    </li>
                                    <li style={{position:"relative"}}><span>전화번호:</span> 
                                        <a href={`tel:${data.footer.phone}`}>{data.footer.phone}</a>
                                        <EditButton type="footer" item="phone" text="전화번호" />
                                    </li>
                                    <li style={{position:"relative"}}><span>FAX:</span> 
                                    <a href={`tel:${data.footer.fax}`}>{data.footer.fax}</a>
                                        <EditButton type="footer" item="fax" text="FAX" />
                                    </li>
                                    {/* <li><a href="/info/map">찾아오는 길</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );

}

export default Footer;