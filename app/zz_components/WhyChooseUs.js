import React from "react";
import Image from "next/image";
import Link from "next/link";

const WhyChooseUs = () => {
  const choiceData = {
    main: {
      whyChooseUs_bg: "/images/home/whyChooseUs_bg.webp",
      whyChooseUs_title: "삼성조경 사업 영역",
      whyChooseUs_subtitle:
        "도시 풍경을 개선하고 자연과 조화를 이루는 삼성조경은 세계적인 기업으로서 도시생활을 미적으로 발전시킵니다.",
      whyChooseUs_list: [
        { title: "조경식재공사", url: "/business/forest" },
        { title: "조경시설물설치공사", url: "/business/facility" },
        { title: "조경설계(정원설계)", url: "/business/design" },
        { title: "벽면녹화(수직정원)", url: "/business/gardening" },
        { title: "정원시공", url: "/business/construction" },
        { title: "수목납품", url: "/business/delivery" },
        { title: "나무병원", url: "/business/tree" },
      ],
    },
  };

  return (
    <section className="why-choose-us-area" aria-labelledby="service-title">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            {/* 디자인 유지: 기존 클래스와 동일한 높이/비주얼 유지 */}
            <div
              className="why-choose-us-image"
              style={{
                position: "relative",
                height: "100%",
                minHeight: "500px", // 기존 레이아웃 유지를 위한 최소 높이
                overflow: "hidden",
              }}
            >
              <Image
                src={choiceData.main.whyChooseUs_bg}
                alt="삼성조경 사업영역 - 조경식재 및 시설물 설치" // SEO용 설명 추가
                fill
                style={{ objectFit: "cover", display: "block" }}
                sizes="(max-width: 991px) 100vw, 40vw"
              />
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="why-choose-us-content">
              {/* 모바일 중앙 정렬 대응을 위한 래퍼 (문구/디자인 변경 없음) */}
              <div className="content text-center text-lg-start">
                <span className="sub-title">삼성조경</span>

                <h2 id="service-title" style={{ position: "relative" }}>
                  {choiceData.main.whyChooseUs_title}
                </h2>

                <p style={{ position: "relative" }}>
                  {choiceData.main.whyChooseUs_subtitle}
                </p>

                <ul
                  className="features-list"
                  style={{
                    position: "relative",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  {choiceData.main.whyChooseUs_list?.map((item, index) => (
                    <li
                      style={{
                        paddingLeft: "0", // 중앙 정렬 시 균형을 위해 0으로 조정 (lg에서 좌측 여백 필요시 클래스로 조절)
                        marginBottom: "10px",
                      }}
                      key={index}
                      className="custom-why-choose-us-item"
                    >
                      <Link
                        href={item.url}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          display: "inline-block",
                        }}
                      >
                        <span
                          style={{
                            cursor: "pointer",
                            fontWeight: "bold",
                            // 필요한 경우 여기에 기존 아이콘 폰트 클래스 등을 추가하세요
                          }}
                        >
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
