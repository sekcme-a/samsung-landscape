import React, { Component } from 'react';
import useData from "context/data"

import EditButton from "src/admin/EditButton"

import RightImageContent from "./RightImageContent"
import LeftImageContent from "./LeftImageContent"

const Business = () => {

  const {data} = useData()

        return (
            <>
                <section className="services-details-area ptb-100">
                    <div className="container">
                      <h3 style={{textAlign:"center"}}>
                        {data.business.two_title ?? "조경시설물설치공사"}
                        <EditButton type="business" item="two_title" text='제목'/>
                      </h3>
                      <p style={{textAlign:"center", marginBottom:"40px"}}>
                        {data.business.two_subtitle ?? "삼성조경의 조경시설물설치공사를 소개합니다."}
                        <EditButton type="business" item="two_subtitle" text='내용'/>
                      </p>

                        <RightImageContent />

                        <LeftImageContent />
                       
                    </div>
                </section>
            </>
        );
}

export default Business;