import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer-area">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="/logo-white.png" alt="image" />
                                            </a>
                                        </Link>

                                        <p style={{fontWeight:"bold"}}>대표이사: 안이재</p>
                                        <p style={{marginTop:"0"}}>투명하고 차별화된 관리
동우 그룹은 고객의 만족을 위해 안전하고 합리적인 관리를 제공 하며 부동산 자산가치 상승에 기여합니다.</p>
                                    </div>

                                    {/* <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="flaticon-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank">
                                                <i className="flaticon-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="flaticon-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="flaticon-instagram"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>페이지 이동</h3>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>인사말</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>경영방침</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/news1">
                                                <a>오시는 길</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/the-place">
                                                <a>공동주택관리</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>빌딩종합관리</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/events">
                                                <a>공지사항</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>동행뉴스</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>동우사보</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>사업문의</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>문의하기</h3>

                                    <ul className="footer-contact-info">
                                        <li><span>주소:</span> 서울특별시 도봉구 시루봉로 234, 동우빌딩 2층</li>
                                        <li><span>사업자등록번호:</span> 210-81-24699</li>
                                        <li><span>Email:</span> <a href="mailto:dongwoodh@hanmail.net">dongwoodh@hanmail.net</a></li>
                                        <li><span>Phone:</span> <a href="tel:029762200">{`02) 976-2200`}</a></li>
                                        <li><span>Fax:</span> <a href="tel:029031297">{`02) 903-1297`}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p><i className="far fa-copyright"></i> 2023 HM</p>
                                </div>

                                {/* <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Privacy Policy</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Terms & Conditions</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;