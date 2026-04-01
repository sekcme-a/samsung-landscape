import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import styles from "./page.module.css";

const BusinessWindow = () => {
  const businessData = {
    business: {
      one_title: "수목납품",
      one_subtitle: "삼성조경의 수목납품을 소개합니다.",
      one_1_title: "수목납품",
      one_1_img: "/images/business/delivery1.webp",
      one_1_list: [
        {
          title: "다양한 종류와 품질의 수목 납품",
          text: "삼성조경은 다양한 종류의 수목을 보유하고 있어, 프로젝트의 목적과 환경에 맞게 최적의 나무를 선택하여 납품합니다. 수목의 품질과 상태를 신중하게 검토하여, 높은 품질의 수목을 제공합니다.",
        },
        {
          title: "환경 적응성 및 조경용도 고려",
          text: "삼성조경은 수목을 선정할 때 해당 지역의 기후와 토양 조건을 고려하여 환경에 적응하는 튼튼한 나무를 선택합니다. 또한, 조경 디자인에 부합하는 수목을 선정하여 고객이 원하는 미적 효과를 얻을 수 있도록 고려합니다.",
        },
      ],
      one_2_title: "수목납품",
      one_2_img: "/images/business/delivery2.webp",
      one_2_list: [
        {
          title: "전문가의 조언과 협력",
          text: "고객에게 적합한 수목을 선택하기 위해 삼성조경은 전문적인 조언을 제공하며, 협력사와의 연계를 통해 특수한 조건이나 대규모 프로젝트에 대한 최적의 수목을 확보합니다. 이를 통해 프로젝트의 성공을 도모합니다.",
        },
        {
          title: "식물 건강과 유지 보수에 대한 관리 지원",
          text: "삼성조경은 납품한 수목이 건강하게 자라고 유지될 수 있도록 신경씁니다. 납품 이후에도 필요한 관리와 유지보수에 대한 조언을 제공하며, 필요한 경우 유지 보수 서비스를 제공하여 수목이 오랫동안 지속적으로 아름다움을 유지할 수 있도록 지원합니다.",
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
        {/* 상단 헤더 섹션 */}
        <section className={styles.hero}>
          <span className={styles.category}>Tree Delivery</span>
          <h2 className={styles.heroTitle}>{business.one_title}</h2>
          <p className={styles.heroSubtitle}>{business.one_subtitle}</p>
        </section>

        {/* 윈도우 그리드 섹션 */}
        <div className={styles.gridContainer}>
          {/* 섹션 1: 이미지 왼쪽, 텍스트 오른쪽 */}
          <div className={styles.row}>
            <div className={styles.windowFrame}>
              <Image
                src={business.one_1_img}
                alt="삼성조경 수목납품 예시"
                fill
                priority
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.contentTitle}>{business.one_1_title}</h3>
              <div className={styles.list}>
                {business.one_1_list.map((item, index) => (
                  <div key={index} className={styles.listItem}>
                    <span className={styles.itemLabel}>{item.title}</span>
                    <p className={styles.itemText}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 섹션 2: 데스크톱에서 이미지 오른쪽, 텍스트 왼쪽 (rowReverse) */}
          <div className={`${styles.row} ${styles.rowReverse}`}>
            <div className={styles.windowFrame}>
              <Image
                src={business.one_2_img}
                alt="삼성조경 수목납품 이미지"
                fill
              />
            </div>
            <div className={styles.content}>
              <h3 className={styles.contentTitle}>{business.one_2_title}</h3>
              <div className={styles.list}>
                {business.one_2_list.map((item, index) => (
                  <div key={index} className={styles.listItem}>
                    <span className={styles.itemLabel}>{item.title}</span>
                    <p className={styles.itemText}>{item.text}</p>
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

export default BusinessWindow;
