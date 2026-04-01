import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import styles from "./page.module.css";

const BusinessFloating = () => {
  const businessData = {
    business: {
      one_title: "나무병원",
      one_subtitle: "삼성조경의 나무병원을 소개합니다.",
      one_1_title: "나무병원",
      one_1_img: "/images/business/tree1.webp",
      one_1_list: [
        {
          title: "진단 및 치료",
          text: "식물의 건강 문제를 진단하고 적절한 치료 방법을 제시합니다. 이는 병해충, 질병, 영양 결핍 등과 같은다양한 문제를 포함할 수 있습니다.",
        },
        {
          title: "예방관리",
          text: "식물이 병든 상태에 빠지지 않도록 적절한 예방적 조치를 취합니다. 이는 적절한 관리 및 관리법, 올바른 배양 환경 유지 등을 포함합니다.",
        },
      ],
      one_2_title: "나무병원",
      one_2_img: "/images/business/tree2.webp",
      one_2_list: [
        {
          title: "상담 및 교육",
          text: "고객에게 식물 관리 및 식물의 건강에 관한 상담을 제공하고, 식물 관련 지식을 교육 컨설팅 합니다.",
        },
        {
          title: "유지 관리",
          text: "나무병원은 식물의 건강을 유지하고 개선하는데 중요한 역할을 합니다. 식물은 조경의 중요한 구성요소이며, 식물의 건강은 주변 환경에 영향을 미칩니다. 따라서 나무병원의 유지관리는 식물 건강을 지키는데 있어서 중요한 자원이 됩니다.",
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
          <h2>{business.one_title}</h2>
          <p>{business.one_subtitle}</p>
        </section>

        <div className={styles.section}>
          {/* 섹션 1 */}
          <section className={styles.row}>
            <div className={styles.imageWrapper}>
              <Image src={business.one_1_img} alt="나무 병원 1" fill priority />
            </div>
            <div className={styles.contentCard}>
              <h3 className={styles.sectionTitle}>{business.one_1_title}</h3>
              <div className={styles.list}>
                {business.one_1_list.map((item, i) => (
                  <div key={i} className={styles.item}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 섹션 2 */}
          <section className={`${styles.row} ${styles.rowReverse}`}>
            <div className={styles.imageWrapper}>
              <Image src={business.one_2_img} alt="나무 병원 2" fill />
            </div>
            <div className={styles.contentCard}>
              <h3 className={styles.sectionTitle}>{business.one_2_title}</h3>
              <div className={styles.list}>
                {business.one_2_list.map((item, i) => (
                  <div key={i} className={styles.item}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default BusinessFloating;
