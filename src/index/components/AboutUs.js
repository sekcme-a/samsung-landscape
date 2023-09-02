import React from 'react';
import Link from 'next/link';
import styles from "../styles/AboutUs.module.css";
import EditButton from 'src/admin/EditButton';
import useData from 'context/data';

const AboutUs = () => {

    const {data} = useData()
    return (
        <>
            <section className="about-section ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <div className="img1">
                                    <img src={data.main.aboutUsImg} alt="image" className={styles.img1} />
                                    <EditButton type="main" item="aboutUsImg" text="이미지 삽입" mode="image" defaultImg="/aboutUs1.jpg"/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">About Us</span><EditButton type="main" item="aboutUsTitle" text="제목" />   
                                <h2 style={{position:"relative"}}>{data.main.aboutUsTitle}<EditButton type="main" item="aboutUsTitle" text="제목" /></h2> 
                                <p className={styles.border} />
                                <h3 className={styles.subtitle} style={{position:"relative"}}>{data.main.aboutUsSubtitle}<EditButton type="main" item="aboutUsSubtitle" text="부제목" /></h3>
                                <p className={styles.text} style={{position:"relative"}}>{data.main.aboutUsContent}<EditButton type="main" item="aboutUsContent" text="내용" /></p>

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
};

export default AboutUs;
