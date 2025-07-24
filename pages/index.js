import React, { useEffect } from "react";

import Banner from "../src/home/Banner";
import About from "src/home/About";
import About2 from "src/home/About2";
import WhyChooseUs from "src/home/WhyChooseUs";
import OurMission from "src/home/OurMission";

import useData from "context/data";

import HeadMeta from "src/public/HeadMeta";
import PopUp from "src/public/PopUp";

const Index = () => {
  const { data, fetch_data } = useData();

  useEffect(() => {
    if (!data.main.fetched) fetch_data("main");
  }, []);

  return (
    <>
      <HeadMeta
        title="삼성조경 - 도봉구 조경회사"
        description="삼성조경은 도봉구 조경 식재, 시설물 설치공사 등 창의적이고 지속 가능한 조경을 추구합니다."
        url="https://xn--289a529abkak1w.kr"
      />
      {/* <Navbar /> */}

      <PopUp />
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
};

export default Index;
