import React, { Component } from 'react';
import Navbar from "src/public/components/Navbar"
import Banner from "src/index/components/Banner"
import AboutUs from "src/index/components/AboutUs"
import JoinNow from "src/index/components/JoinNow"
import Service from "src/index/components/Service"
import ScrollCount from "src/index/components/ScrollCount"
import Subsidiary from "src/index/components/Subsidiary"
import Footer from 'src/public/components/Footer';
// import NavbarTwo from '../components/Layout/NavbarTwo';
// import Banner from '../components/HomeTwo/Banner';
// import WeOfferSlider from '../components/Common/WeOfferSlider';
// import AboutUs from '../components/HomeTwo/AboutUs';
// import VideoArea from '../components/Common/VideoArea';
// import OurServices from '../components/Common/OurServices';
// import Partner from '../components/Common/Partner';
// import Gallery from '../components/Common/Gallery';
// import PriceTable from '../components/Pricing/PriceTable';
// import JoinNow from '../components/Common/JoinNow';
// import FeedbackSlider from '../components/Common/FeedbackSlider';
// import OurPlace from '../components/Common/OurPlace';
// import OurBlog from '../components/Common/OurBlog';
// import Footer from '../components/Layout/Footer';

class Index2 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Banner />

                <AboutUs />

                <JoinNow />

                <Service />

                <ScrollCount />

                <Subsidiary />

                {/* <Footer /> */}
                {/* <NavbarTwo />

                <Banner />

                <WeOfferSlider />

                <AboutUs />

                <VideoArea />

                <OurServices />

                <Partner />

                <Gallery />

                <PriceTable />

                <JoinNow />

                <FeedbackSlider />

                <OurPlace />

                <OurBlog /> 
                
                <Footer /> */}
            </>
        );
    }
}

export default Index2;