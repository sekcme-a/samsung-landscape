"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; // 이미지 최적화 추가
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  const bannerData = {
    main: {
      banner_bg1: "/images/home/banner-bg1.webp",
      banner_title1:
        "삼성조경은 더 나은 환경과 삶을 위한 풍요로움을 창출합니다.",
      banner_bg2: "/images/home/banner-bg2.webp",
      banner_subtitle2: "삼성조경 주식회사는",
      banner_title2:
        "조경 식재, 시설물 설치공사 등 창의적이고 지속 가능한 조경을 추구합니다.",
    },
  };

  return (
    <header
      className="home-banner-wrapper"
      style={{ minHeight: "600px", position: "relative" }}
    >
      <Swiper
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="home-slides"
      >
        {/* 슬라이드 1 */}
        <SwiperSlide>
          <div
            className="main-banner"
            style={{ position: "relative", minHeight: "600px" }}
          >
            {/* SEO & 성능: 배경 이미지 대신 Next.js Image 사용 (LCP 최적화) */}
            <Image
              src={bannerData.main.banner_bg1}
              alt="삼성조경 메인 배경 - 자연과 조화를 이루는 환경 창출"
              fill
              priority // 첫 번째 슬라이드는 가장 먼저 로드되어야 함
              style={{ objectFit: "cover", zIndex: -1 }}
            />
            <div
              className="image-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)", // 0.5는 어두운 정도 (0.0 ~ 1.0)
                zIndex: 0, // 이미지(-1)보다 위, 콘텐츠(보통 1 이상)보다 아래
              }}
            />

            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    {/* h1은 페이지당 하나! 가장 중요한 문구에 배치 */}
                    <h1 className="main-title">
                      {bannerData.main.banner_title1}
                    </h1>

                    <div className="btn-box">
                      <Link href="/info/greet" className="default-btn">
                        회사소개 보러가기<span></span>
                      </Link>
                      <Link href="/business/forest" className="optional-btn">
                        사업영역 보러가기<span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-area" />
          </div>
        </SwiperSlide>

        {/* 슬라이드 2 */}
        <SwiperSlide>
          <div
            className="main-banner"
            style={{ position: "relative", minHeight: "600px" }}
          >
            <Image
              src={bannerData.main.banner_bg2}
              alt="삼성조경 조경 식재 및 시설물 설치공사"
              fill
              loading="lazy" // 두 번째부터는 지연 로딩
              style={{ objectFit: "cover", zIndex: -1 }}
            />
            <div
              className="image-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)", // 0.5는 어두운 정도 (0.0 ~ 1.0)
                zIndex: 0, // 이미지(-1)보다 위, 콘텐츠(보통 1 이상)보다 아래
              }}
            />

            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    {bannerData.main.banner_subtitle2 && (
                      <span
                        className="sub-title"
                        style={{ display: "block", marginBottom: "10px" }}
                      >
                        {bannerData.main.banner_subtitle2}
                      </span>
                    )}
                    {/* 두 번째 슬라이드는 h2 혹은 div로 처리하여 h1 중복 회피 */}
                    <h2
                      className="custom_title2"
                      style={{ fontSize: "2.5rem", fontWeight: "bold" }}
                    >
                      {bannerData.main.banner_title2}
                    </h2>

                    <div className="btn-box">
                      <Link href="/info/greet" className="default-btn">
                        회사소개 보러가기<span></span>
                      </Link>
                      <Link href="/business/forest" className="optional-btn">
                        사업영역 보러가기<span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-area" />
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default Banner;
