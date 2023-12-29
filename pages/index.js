import React, { useEffect } from 'react';
import Navbar from '../src/public/Navbar';

import Banner from '../src/home/Banner';
import About from "src/home/About"
import About2 from "src/home/About2"
import WhyChooseUs from "src/home/WhyChooseUs"
import OurMission from "src/home/OurMission"
import Footer from "src/public/Footer"

import useData from 'context/data';

import HeadMeta from 'src/public/HeadMeta';

const Index = () => {
    const {data, fetch_data} = useData()

    useEffect(()=>{
        if(!data.main.fetched) fetch_data("main")
    },[])
  
    return (
        <>

        <HeadMeta
        title="삼성조경"
        description="삼성조경, 더 나은 환경과 삶은 위한 풍요로움을 창출합니다."
        url="https://xn--289a529abkak1w.kr/"
      />
            {/* <Navbar /> */}

            <Banner />

            {/* <ServicesBoxes />    */}

            <About />

            {/* <ServicesSlider /> */}

            {/* <Partner /> */}

            <WhyChooseUs />


            <About2 />
            <OurMission />

            
            {/* <Footer /> */}
        </>
    );
}

export default Index;