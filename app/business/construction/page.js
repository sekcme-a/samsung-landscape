import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import styles from "./page.module.css";

const BusinessTimeline = () => {
  const businessData = {
    business: {
      one_title: "정원시공",
      one_subtitle: "삼성조경의 정원시공을 소개합니다.",
      one_1_title: "정원시공",
      one_1_img: "/images/business/construction1.webp",
      one_1_list: [
        {
          title: "특화된 정원 디자인과 기술적 시공 노하우",
          text: "삼성조경은 고객의 요구와 환경을 고려하여 특화된 정원 디자인을 제공합니다. 이뿐만 아니라 최신 기술과 전문가들의 노하우를 활용하여 정원 시공을 실시합니다. 기술적인 시공은 정원이 오랫동안 아름답게 유지될 수 있도록 보장합니다.",
        },
        {
          title: "다양한 식물과 조경소품 활용",
          text: "삼성조경은 다양한 식물과 조경 소품을 조합하여 고객의 취향과 환경에 맞춘 정원을 조성합니다. 식물의 종류, 크기, 색상 등을 조합함으로써 다양한 테마의 정원을 만들어내어, 각각의 프로젝트가 독특하고 맞춤형으로 완성됩니다.",
        },
      ],
      one_2_title: "정원시공",
      one_2_img: "/images/business/constuction2.webp",
      one_2_list: [
        {
          title: "환경 친화적이고 지속 가능한 시공 방식",
          text: "삼성조경은 정원시공을 진행할 때 환경 친화적이고 지속 가능한 시공 방식을 우선시합니다. 자원을 효율적으로 활용하고, 친환경적인 재료와 방법을 통해 정원을 조성함으로써 자연과 조화로운 환경을 만들어냅니다.",
        },
        {
          title: "고객과의 협력과 소통",
          text: "삼성조경은 정원시공 프로젝트에서 고객과의 긴밀한 협력과 소통을 중요시합니다. 고객의 요구와 취향을 정확하게 이해하고, 프로젝트 진행 중에도 지속적인 소통을 통해 고객의 의견을 수렴하여 최종 결과물에 대한 만족도를 높이는 데 주력합니다.",
        },
      ],
    },
  };

  const { business } = businessData;

  return (
    <>
      <PageHeader
        title={business.one_title}
        text={`사업영역 - ${business.one_title}`}
      />

      <main className={styles.inner}>
        {/* 헤더 섹션 */}
        <section className={styles.header}>
          <h2 className={styles.title}>{business.one_title}</h2>
          <p className={styles.subtitle}>{business.one_subtitle}</p>
        </section>

        <div className={styles.timeline}>
          {/* Section 1 */}
          <section className={styles.section}>
            <div className={styles.row}>
              <div className={styles.imageBox}>
                <Image
                  src={business.one_1_img}
                  alt="정원시공 이미지 1"
                  fill
                  priority
                />
              </div>
              <div className={styles.content}>
                <span className={styles.index}>01</span>
                <h3 className={styles.sectionTitle}>{business.one_1_title}</h3>
                <div className={styles.storyList}>
                  {business.one_1_list.map((item, idx) => (
                    <div key={idx} className={styles.storyItem}>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 (Desktop reverse layout) */}
          <section className={styles.section}>
            <div
              className={`${styles.row} ${styles.rowReverse}`}
              style={{ direction: "rtl" }}
            >
              <div className={styles.imageBox} style={{ direction: "ltr" }}>
                <Image
                  src={business.one_2_img}
                  alt="삼성조경 정원시공 이미지 2"
                  fill
                />
              </div>
              <div className={styles.content} style={{ direction: "ltr" }}>
                <span className={styles.index}>02</span>
                <h3 className={styles.sectionTitle}>{business.one_2_title}</h3>
                <div className={styles.storyList}>
                  {business.one_2_list.map((item, idx) => (
                    <div key={idx} className={styles.storyItem}>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        {/* <div className={styles.ctaBox}>
          <h2>당신의 가치를 높이는 조경 파트너</h2>
          <a href="#" className={styles.ctaLink}>
            프로젝트 문의하기
          </a>
        </div> */}
      </main>
    </>
  );
};

export default BusinessTimeline;
