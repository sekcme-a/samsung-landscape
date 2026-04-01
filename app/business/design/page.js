import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import styles from "./page.module.css";

const BusinessGallery = () => {
  const businessData = {
    business: {
      one_title: "조경설계(정원설계)",
      one_subtitle: "삼성조경의 조경설계(정원설계)를 소개합니다.",
      one_1_title: "조경설계(정원설계)",
      one_1_img: "/images/business/design1.webp",
      one_1_list: [
        {
          title: "창의적 디자인과 기술적 전문성",
          text: "삼성조경의 조경설계 서비스는 창의적인 디자인과 높은 기술적 전문성을 결합합니다. 정원설계에서는 자연의 아름다움을 최대한 살리면서도 기능적이고 독특한 디자인을 제공하여, 공간의 특성과 고객의 요구를 고려한 맞춤형 솔루션을 제공합니다.",
        },
        {
          title: "환경 친화적이고 지속 가능한 접근",
          text: "삼성조경은 정원설계를 진행할 때 환경 친화적이고 지속 가능한 방식을 강조합니다. 생태계를 보존하면서도 자연스러운 조경 공간을 창출하고, 자원 효율성을 높이는 디자인을 통해 더 나은 환경을 지향합니다.",
        },
      ],
      one_2_title: "조경설계(정원설계)",
      one_2_img: "/images/business/design2.webp",
      one_2_list: [
        {
          title: "고객과의 긴밀한 협력",
          text: "고객과의 원활한 소통은 삼성조경의 조경설계에서 핵심 역할을 합니다. 고객의 취향과 목표를 정확하게 이해하고, 이를 기반으로 설계하며 소통을 통해 계획의 진행 상황을 고객과 공유함으로써 최종 결과물에 대한 만족도를 높이고 있습니다.",
        },
        {
          title: "다양한 요소의 조화와 감각적인 디자인",
          text: "삼성조경은 정원설계에서 자연의 다양한 요소들을 조화롭게 결합하고, 감각적인 디자인을 통해 공간의 아름다움을 극대화합니다. 식물의 종류, 돌과 물의 조합, 조명의 활용 등을 섬세하게 고려하여 독특하면서도 조화로운 정원을 만들어냅니다.",
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
        <section className={styles.hero}>
          <div className={styles.inner}>
            <h2 className={styles.heroTitle}>{business.one_title}</h2>
            <p className={styles.heroSubtitle}>{business.one_subtitle}</p>
          </div>
        </section>
        <div className={styles.section}>
          {/* 첫 번째 섹션: 이미지 왼쪽, 텍스트 오른쪽 */}
          <div className={styles.row}>
            <div className={styles.imageFrame}>
              <Image
                src={business.one_1_img}
                alt="정원설계 예시"
                fill
                priority
              />
            </div>
            <div className={styles.content}>
              <span className={styles.sectionTitle}>PART 01</span>
              <h3 className={styles.mainHeadline}>{business.one_1_title}</h3>
              <div className={styles.cardList}>
                {business.one_1_list.map((item, index) => (
                  <div key={index} className={styles.card}>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p className={styles.cardText}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 두 번째 섹션: 텍스트 왼쪽, 이미지 오른쪽 (rowReverse) */}
          <div className={`${styles.row} ${styles.rowReverse}`}>
            <div className={styles.imageFrame}>
              <Image src={business.one_2_img} alt="삼성조경 정원설계" fill />
            </div>
            <div className={styles.content}>
              <span className={styles.sectionTitle}>PART 02</span>
              <h3 className={styles.mainHeadline}>{business.one_2_title}</h3>
              <div className={styles.cardList}>
                {business.one_2_list.map((item, index) => (
                  <div key={index} className={styles.card}>
                    <h4 className={styles.cardTitle}>{item.title}</h4>
                    <p className={styles.cardText}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BusinessGallery;
