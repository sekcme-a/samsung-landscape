import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

const Business = () => {
  const businessData = {
    business: {
      one_title: "조경식재공사",
      // one_subtitle: "삼성조경의 전문 조경식재 서비스를 소개합니다.",
      one_1_title: "조경식재공사 개요",
      one_1_text: "",
      one_1_img: "/images/business/forest1.webp",
      one_1_list: [
        {
          title: "조경식재공사",
          text: "조경식재공사는 다양한 조경 디자인과 자연 친화적인 식재물을 활용하여 도시 및 공공 공간을 아름답고 기능적으로 조성하는 전문가 그룹입니다. 회사는 고객의 니즈에 맞춘 맞춤형 솔루션을 제공하며, 자연과 도시의 조화로운 결합을 추구합니다.",
        },
        {
          title: "서비스 및 프로젝트",
          text: "삼성조경의 조경식재공사는 주거지, 상업지, 공용 공간 등 다양한 분야에서 다양한 규모의 프로젝트를 수행하고 있습니다. 조경 디자인, 식재물 선택, 환경 보전 및 생태계 복원에 대한 풍부한 경험을 기반으로 고객들에게 탁월한 서비스를 제공하고 있습니다.",
        },
      ],
      one_2_title: "조경식재공사",
      one_2_text: "조경식재공사에 대해 설명드립니다.",
      one_2_img: "/images/business/forest2.webp",
      one_2_list: [
        {
          title: "환경 친화성과 지속 가능성",
          text: "회사는 친환경적인 재료와 방법을 사용하여 프로젝트를 수행하며, 지속 가능한 도시 개발을 촉진하는 데 앞장서고 있습니다. 생태계의 보전과 도시의 녹지 공간을 확대하는 데 기여하여 보다 건강하고 지속 가능한 환경을 조성하고자 노력하고 있습니다.",
        },
        {
          title: "협력 및 파트너십",
          text: "조경식재공사는 건설업체, 설계사, 정부 기관 등과의 강력한 협력을 통해 효과적인 프로젝트 수행을 위해 노력하고 있습니다. 파트너와의 긴밀한 소통을 통해 프로젝트의 품질과 효율성을 극대화하며, 다양한 전문성을 결합하여 최상의 결과를 창출합니다.",
        },
      ],
    },
  };

  return (
    <>
      <PageHeader title="조경식재공사" text="사업영역 - 조경식재공사" />

      {/* SEO: main 태그로 핵심 콘텐츠 영역 명시 */}
      <main className="services-details-area ptb-100">
        <div className="container">
          {/* 섹션 제목 영역: PageHeader가 h1이므로 여기서는 h2가 적절 */}
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            {businessData.business.one_title}
          </h2>

          {/* 섹션 설명 영역 */}
          {businessData.business.one_subtitle && (
            <p
              style={{
                textAlign: "center",
                marginBottom: "60px",
                color: "#666",
              }}
            >
              {businessData.business.one_subtitle}
            </p>
          )}

          {/* 첫 번째 개요 영역 */}
          <section
            className="services-details-overview"
            style={{ marginBottom: "80px" }}
          >
            <div className="services-details-desc">
              <h3 style={{ position: "relative", marginBottom: "20px" }}>
                {businessData.business.one_1_title}
              </h3>
              <p
                style={{
                  position: "relative",
                  lineHeight: "1.8",
                  color: "#444",
                }}
              >
                {businessData.business.one_1_text}
              </p>

              {businessData.business.one_1_list?.map((item, index) => (
                <div
                  className="features-text"
                  key={index}
                  style={{ marginTop: "20px" }}
                >
                  <h4
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className="flaticon-check-mark"
                      style={{ color: "#4caf50" }}
                    ></i>
                    {item.title}
                  </h4>
                  <p style={{ marginLeft: "30px" }}>{item.text}</p>
                </div>
              ))}
            </div>

            <div
              className="services-details-image"
              style={{
                position: "relative",
                minHeight: "450px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Image
                src={businessData.business.one_1_img}
                alt="삼성조경의 전문 조경식재공사 시공 사례"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </section>

          {/* 두 번째 상세 영역 */}
          <section className="services-details-overview">
            <div
              className="services-details-image"
              style={{
                position: "relative",
                minHeight: "450px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Image
                src={businessData.business.one_2_img}
                alt="조경식재공사 환경 분석 및 수종 선정 과정"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="services-details-desc">
              <h3 style={{ position: "relative", marginBottom: "20px" }}>
                {businessData.business.one_2_title}
              </h3>
              <p
                style={{
                  position: "relative",
                  lineHeight: "1.8",
                  color: "#444",
                }}
              >
                {businessData.business.one_2_text}
              </p>

              {businessData.business.one_2_list?.map((item, index) => (
                <div
                  className="features-text"
                  key={index}
                  style={{ marginTop: "20px" }}
                >
                  <h4
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i
                      className="flaticon-check-mark"
                      style={{ color: "#4caf50" }}
                    ></i>
                    {item.title}
                  </h4>
                  <p style={{ marginLeft: "30px" }}>{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Business;
