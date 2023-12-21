import React, { Component } from 'react';

import useData from "context/data"
import EditButton from "src/admin/EditButton"

const PO = {position: "relative"}

const Basic = () => {
    const {data} = useData()


      return (
          <>
              <section className="benefits-section ptb-100">
                  <div className="container">
                      <div className="section-title">
                          <span className="sub-title" style={PO}>
                            {data.info.basic_top_title ?? "기본 정보"}
                            <EditButton type="info" item="basic_top_title" text="안내문구" />
                          </span>
                          <h3 style={PO}>                           
                            {data.info.basic_title ?? "삼성조경 기본 정보"}
                            <EditButton type="info" item="basic_title" text="제목" />
                          </h3>
                          <p style={PO}>
                            {data.info.basic_subtitle}
                            <EditButton type="info" item="basic_subtitle" text="부제목" />
                            
                          </p>
                      </div>

                      <div className="row align-items-center">
                          <div className="col-lg-3 col-md-6" style={PO}>
                            <EditButton type="info" item="basic_list" text="제목와 내용" mode="arrayOfObj_title_and_text" />
                                {data?.info?.basic_list?.map((item, index) => {
                                    if(index%2===0)
                                    return(
                                        <div className="single-benefits-box" key={index}>
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    )
                                    
                                })}
                          </div>

                          <div className="col-lg-6 col-md-6">
                              <div className="benefits-image" style={PO}>
                                  <img src={data.info.basic_img} alt="image" style={{objectFit:"cover", overflow:'hidden', maxHeight:"700px"}}/>
                                  <EditButton type="info" item="basic_img" mode="image" defaultImg="/image/basic.jpg" text="이미지" />
                              </div>
                          </div>

                          <div className="col-lg-3 col-md-6">
                            {data?.info?.basic_list?.map((item, index) => {
                                if(index%2===1)
                                return(
                                    <div className="single-benefits-box" key={index}>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                )
                                
                            })}

                          </div>
                      </div>
                  </div>
              </section>
          </>
      );
}

export default Basic;