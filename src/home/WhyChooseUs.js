import useData from 'context/data';
import React, { Component } from 'react';
import EditButton from 'src/admin/EditButton';

const WhyChooseUs = () => {
    const {data} = useData()

    return (
        <>
            <section className="why-choose-us-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="why-choose-us-image" style={{backgroundImage:`url(${data.main.whyChooseUs_bg})`}}>
                                <img src={data.main.whyChooseUs_bg} alt="삼성조경 사업영역" />
                                <EditButton
                                    type="main" item="whyChooseUs_bg" text="배경이미지 삽입" mode="image" defaultImg="/images/whyChooseUs_bg.jpg" 
                                    style={{position:"absolute", top: 150, right: 100}}
                                />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="why-choose-us-content">
                                <div className="content">
                                    <span className="sub-title">삼성조경</span>
                                    <h2 style={{position:"relative"}}>
                                        {data.main.whyChooseUs_title}
                                        <EditButton type="main" item="whyChooseUs_title" text="제목" />
                                    </h2>
                                    <p  style={{position:"relative"}}>
                                        {data.main.whyChooseUs_subtitle ?? 
                                            "도시 풍경을 개선하고 자연과 조화를 이루는 삼성조경은 세계적인 기업으로서 도시생활을 미적으로 발전시킵니다."
                                        }
                                        <EditButton type="main" item="whyChooseUs_subtitle" text="부제목" />
                                    </p>

                                    <ul className="features-list" style={{position:"relative"}}>
                                        <EditButton type="main" item="whyChooseUs_list" mode="arrayOfObj_title_and_text" text="제목와 내용" style={{marginRight:"30px"}}/>
                                        {data?.main?.whyChooseUs_list?.map((item, index) => (
                                            <li style={{paddingLeft:"15px"}} key={index}>
                                                <span>{item.title}</span>
                                                {item.text}
                                            </li>
                                        ))}
                                      

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhyChooseUs;