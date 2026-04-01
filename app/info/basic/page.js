import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import React from "react";

const PO = { position: "relative" };

const About = () => {
  const aboutData = {
    info: {
      basicAbout_top_title: "삼성조경",
      basicAbout_title: "삼성조경의 기본 정보에 대해 소개해드립니다.",
      basicAbout_text: (
        <>
          삼성조경 주식회사는 조경 및 환경 디자인 솔루션을 제공하는 회사로서,
          자연과 도시를 조화롭게 연결하는데 최선을 다하고 있습니다.
        </>
      ),
    },
  };
  const basicData = {
    info: {
      basic_top_title: "기본 정보",
      basic_title: "삼성조경의 8가지 장점", // SEO: '기본 정보'보다 구체적인 키워드 권장 (문구 유지 원할 시 기존대로 사용 가능)
      basic_subtitle:
        "삼성조경은 자연의 아름다움을 도심 속으로 옮겨와 지속 가능한 가치를 창출합니다.",
      basic_img: "/images/info/basic.webp",
      basic_list: [
        {
          title: "기술 혁신",
          text: "삼성조경은 혁신적인 기술을 적극적으로 채택하여 산업의 선두에 서 있습니다.",
        },
        {
          title: "글로벌 네트워크",
          text: "광범위한 글로벌 네트워크를 통해 다양한 시장에서 뛰어난 비즈니스 기회를 창출합니다.",
        },
        {
          title: "지속 가능성",
          text: "삼성조경은 지속 가능한 비즈니스 모델과 환경 친환경적인 기술을 적극적으로 추구하여 사회적 책임을 다하고 있습니다.",
        },
        {
          title: "전문 인력",
          text: "회사는 업계 전문가들로 구성된 뛰어난 팀을 보유하고 있으며, 높은 수준의 기술과 경험을 기반으로 일합니다.",
        },
        {
          title: "고객 중심 접근",
          text: "삼성조경은 고객의 니즈를 이해하고 고객 중심의 솔루션을 제공하여 긍정적인 고객 경험을 조성합니다.",
        },
        {
          title: "연구 및 개발 투자",
          text: "연구 및 개발에 대한 지속적인 투자를 통해 혁신적인 제품 및 서비스를 개발하여 시장에서 선도적인 역할을 하고 있습니다.",
        },
        {
          title: "파트너십 강화",
          text: "다양한 파트너와의 협력을 통해 다양한 분야에서의 경쟁력을 향상시키고 새로운 비즈니스 기회를 모색하고 있습니다.",
        },
        {
          title: "품질 관리",
          text: "제품 및 서비스의 품질에 대한 엄격한 품질 관리 체계를 구축하여 고객에게 높은 수준의 신뢰성을 제공합니다.",
        },
      ],
    },
  };

  return (
    <>
      {/* PageHeader 내부에 <h1>이 포함되어 있으므로 이 페이지의 대주제는 해결됨 */}
      <PageHeader title="기본 정보" text="삼성조경의 기본 정보입니다." />
      <main>
        {/* 첫 번째 섹션: 회사 소개 개요 */}
        <section
          className="about-area ptb-100"
          aria-labelledby="about-intro-title"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-title">
                  <span className="sub-title" style={PO}>
                    {aboutData.info.basicAbout_top_title}
                  </span>
                  {/* SEO: h2 태그로 계층 구조 형성 */}
                  <h2 id="about-intro-title" style={PO}>
                    {aboutData.info.basicAbout_title}
                  </h2>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-text">
                  <p style={{ ...PO, fontWeight: "normal", lineHeight: "1.8" }}>
                    {aboutData.info.basicAbout_text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 두 번째 섹션: 상세 기본 정보 (리스트) */}
        <section className="benefits-section ptb-100">
          <div className="container">
            <div className="section-title text-center">
              <span className="sub-title" style={PO}>
                {basicData.info.basic_top_title}
              </span>
              {/* SEO: 주요 섹션 제목은 h3 유지 */}
              <h3 style={{ ...PO, marginBottom: "15px" }}>
                {basicData.info.basic_title}
              </h3>
              <p style={{ ...PO, maxWidth: "700px", margin: "0 auto" }}>
                {basicData.info.basic_subtitle}
              </p>
            </div>

            <div className="row align-items-center">
              {/* 왼쪽 컬럼: 짝수 인덱스 */}
              <div className="col-lg-3 col-md-6">
                {basicData.info.basic_list?.map((item, index) => {
                  if (index % 2 === 0)
                    return (
                      <div
                        className="single-benefits-box"
                        key={index}
                        style={PO}
                      >
                        <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                          {item.title}
                        </h4>
                        <p>{item.text}</p>
                      </div>
                    );
                  return null;
                })}
              </div>

              {/* 중앙 컬럼: 이미지 최적화 */}
              <div className="col-lg-6 col-md-6">
                <div
                  className="benefits-image"
                  style={{
                    ...PO,
                    minHeight: "400px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    height: "600px",
                  }}
                >
                  <Image
                    src={basicData.info.basic_img}
                    alt="삼성조경 회사 전경 및 기본정보 안내 이미지"
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 991px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* 오른쪽 컬럼: 홀수 인덱스 */}
              <div className="col-lg-3 col-md-6">
                {basicData.info.basic_list?.map((item, index) => {
                  if (index % 2 === 1)
                    return (
                      <div
                        className="single-benefits-box"
                        key={index}
                        style={PO}
                      >
                        <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                          {item.title}
                        </h4>
                        <p>{item.text}</p>
                      </div>
                    );
                  return null;
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
