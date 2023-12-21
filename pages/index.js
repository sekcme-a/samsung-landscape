import React, { useEffect } from 'react';
import Navbar from '../src/public/Navbar';

import Banner from '../src/home/Banner';
import About from "src/home/About"
import About2 from "src/home/About2"
import WhyChooseUs from "src/home/WhyChooseUs"
import OurMission from "src/home/OurMission"
import Footer from "src/public/Footer"

import useData from 'context/data';


const Index = () => {
    const {data, fetch_data} = useData()

    useEffect(()=>{
        if(!data.main.fetched) fetch_data("main")
    },[])
  
    return (
        <>
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