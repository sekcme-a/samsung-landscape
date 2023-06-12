import React, { Component } from 'react';
import Link from 'next/link';
import styles from "../styles/AboutUs.module.css"

class AboutUs extends Component {
    render() {
        return (
            <>
                <section className="about-section ptb-100">
                    <div className="container-fluid">
                        <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12">
                                <div className="about-image">
                                    <div className="img1">
                                        <img src="/aboutUs1.jpg" alt="image" className={styles.img1} />
                                    </div>

                                    {/* <div className="img2">
                                        <img src="/aboutUs2.jpg" alt="image" className={styles.img2} />
                                    </div>

                                    <div className="img3">
                                        <img src="/aboutUs3.jpg" alt="image" className={styles.img3} />
                                    </div> */}
                                </div>
                            </div>



                        <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <span className="sub-title">About Us</span>
                                    <h2>동우그룹은 부동산 종합 서비스로 고객님들께 다가갑니다. </h2>
                                    <p className={styles.border} />
                                    <h3 className={styles.subtitle}>투명하고 차별화된 관리</h3>
                                    <p className={styles.text}>동우 그룹은 고객의 만족을 위해 안전하고 합리적인 관리를 제공 하며 부동산 자산가치 상승에 기여합니다.</p>

                                    {/* <ul className="features-list">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-work"></i>
                                            </div>
                                            <span>Trusted by Thousands</span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-target"></i>
                                            </div>
                                            <span>Workspace Solutions</span>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </li>
                                    </ul> */}
{/*                                     
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p> */}

                                    <Link href="/info/business">
                                        <a className="read-more-btn">
                                            자세히 보기 <i className="flaticon-next"></i>
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
}

export default AboutUs;