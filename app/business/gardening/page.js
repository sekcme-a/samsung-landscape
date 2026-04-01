import React from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import styles from "./page.module.css";

const BusinessSplit = () => {
  const businessData = {
    business: {
      one_title: "조경시설물설치공사",
      one_subtitle: "삼성조경의 조경시설물설치공사를 소개합니다.",
      one_1_title: "조경시설물설치공사",
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

  const { business } = businessData;

  return (
    <>
      <PageHeader
        title={business.one_title}
        text={`사업영역 - ${business.one_title}`}
      />
      <main>
        <section className={styles.inner}>
          {/* 상단 텍스트 영역 */}
          <div className={styles.headerSection}>
            <h2>{business.one_title}</h2>
            <p>{business.one_subtitle}</p>
          </div>

          <div className={styles.contentGrid}>
            {/* 섹션 1 */}
            <section className={styles.row}>
              <div className={styles.imageSide}>
                <Image
                  src={business.one_1_img}
                  alt="삼성조경 조경시설물설치공사2"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={styles.textSide}>
                <h3 className={styles.sectionTitle}>{business.one_1_title}</h3>
                <div className={styles.cardList}>
                  {business.one_1_list.map((item, idx) => (
                    <div key={idx} className={styles.card}>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 섹션 2 - 데스크톱에서 반전 레이아웃 */}
            <section className={`${styles.row} ${styles.rowReverse}`}>
              <div className={styles.imageSide}>
                <Image
                  src={business.one_2_img}
                  alt="삼성조경 조경시설물설치공사2"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className={styles.textSide}>
                <h3 className={styles.sectionTitle}>{business.one_2_title}</h3>
                <div className={styles.cardList}>
                  {business.one_2_list.map((item, idx) => (
                    <div key={idx} className={styles.card}>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default BusinessSplit;
