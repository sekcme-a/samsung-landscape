import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import styles from "./facility.module.css";

const Business = () => {
  const businessData = {
    business: {
      one_title: "조경시설물설치공사",
      one_subtitle: "삼성조경의 조경시설물설치공사를 소개합니다.",
      one_1_title: "조경시설물설치공사",
      // one_1_text:
      //   "다양한 조경 디자인과 자연 친화적인 식재물을 활용하여 도시 및 공공 공간을 아름답고 기능적으로 조성합니다.",
      one_1_img: "/images/business/facility1.webp",
      one_1_list: [
        {
          title: "풍부한 녹지 공간 조성",
          text: "삼성조경은 다양한 식물과 조경요소를 활용하여 도시 내에 풍부하고 다양한 녹지 공간을 조성합니다. 이는 도시 주민들에게 안락하고 휴식을 취할 수 있는 자연 친화적인 환경을 제공합니다.",
        },
        {
          title: "조경 시설물 설치",
          text: "조경 시설물로는 분수, 연못, 돌담, 벤치, 조명 등이 포함될 수 있으며 이는 도시의 각 지역에 맞게 조화롭게 배치되어 도시의 미적 가치를 높이고 쾌적한 생활환경을 조성합니다.",
        },
      ],
      one_2_title: "조경시설물설치공사",
      // one_2_text:
      //   "우리는 단순히 나무를 심는 것을 넘어, 미래 세대를 위한 생태계 복원을 생각합니다.",
      one_2_img: "/images/business/facility2.webp",
      one_2_list: [
        {
          title: "기능적이고 환경 친화적 설계",
          text: "삼성조경은 설치되는 조경 시설물이 기능적이면서도 환경에 부담을 주지 않도록 설계합니다. 비옥한 토양 조성, 효율적인 물 관리, 에너지 효율 적인 조명 시스템 등을 통해 지속 가능한 조경을 추구합니다.",
        },
        {
          title: "고객과의 협력",
          text: "삼성조경은 고객의 요구와 기대에 부응하기 위해 밀접한 협력을 추구합니다. 고객과의 소통을 통해 프로젝트의 목적과 목표를 정확히 이해하고, 이를 바탕으로 최상의 조경 시설물을 설치합니다.",
        },
      ],
    },
  };

  return (
    <>
      <PageHeader
        title="조경시설물설치공사"
        text="사업영역 - 조경시설물설치공사"
      />
      <main>
        {/* Hero */}
        <section className={styles.heroSection}>
          <span className={styles.badge}>LANDSCAPE FACILITIES</span>
          <h2 className={styles.mainTitle}>
            {businessData.business.one_title}
          </h2>
          <p className={styles.subTitle}>
            {businessData.business.one_subtitle}
          </p>
        </section>

        <div className={styles.mainContent}>
          {/* Section 1 */}
          <section className={styles.section}>
            <div className={styles.imageCol}>
              <div className={styles.imageWrapper}>
                <Image
                  src={businessData.business.one_1_img}
                  alt="조경시설물설치공사 1"
                  fill
                  priority
                />
              </div>
            </div>
            <div className={styles.textCol}>
              <h3
                className={styles.itemContent}
                style={{
                  fontSize: "2rem",
                  marginBottom: "1.5rem",
                  borderLeft: "4px solid #16a34a",
                  paddingLeft: "1rem",
                }}
              >
                {businessData.business.one_1_title}
              </h3>
              {businessData.business.one_1_text && (
                <p
                  className={styles.subTitle}
                  style={{ textAlign: "left", margin: "0 0 2rem 0" }}
                >
                  {businessData.business.one_1_text}
                </p>
              )}
              <div className={styles.listContainer}>
                {businessData.business.one_1_list.map((item, i) => (
                  <div key={i} className={styles.listItem}>
                    <div className={styles.itemNumber}>0{i + 1}</div>
                    <div className={styles.itemContent}>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className={styles.section}>
            <div className={`${styles.textCol} order-mobile-2`}>
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "#15803d",
                  marginBottom: "1rem",
                }}
              >
                {businessData.business.one_2_title}
              </h3>
              {businessData.business.one_2_text && (
                <p
                  style={{
                    color: "#64748b",
                    marginBottom: "2rem",
                    lineHeight: 1.7,
                  }}
                >
                  {businessData.business.one_2_text}
                </p>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {businessData.business.one_2_list.map((item, i) => (
                  <div key={i} className={styles.infoCard}>
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p style={{ color: "#64748b", fontSize: "0.95rem" }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.imageCol} order-mobile-1`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={businessData.business.one_2_img}
                  alt="조경시설물설치공사 2"
                  fill
                  className={styles.grayscaleImg}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Business;
