import React from "react";
import Image from "next/image";
import styles from "./greet.module.css";
import PageHeader from "@/components/PageHeader";

const Greet = () => {
  const greetData = {
    info: {
      greet_img: "/images/logo.png",
      greet_content_title: "안녕하십니까, 삼성조경 주식회사입니다.",
      // SEO: 본문 내 핵심 키워드(지속 가능성, 조경, 환경 디자인 등)를 검색 엔진이 인지하도록 구조화
      greet_content_text: `안녕하세요. 삼성조경 주식회사입니다. 우리는 더 나은 미래를 위한 조경 및 환경 디자인 솔루션을 제공하는 회사로서, 자연과 도시를 조화롭게 연결하는 데 최선을 다하고 있습니다.

우리의 비전은 지속 가능하고 아름다운 환경을 창조하여 사람들에게 풍요로운 삶의 경험을 제공하는 것입니다. 삼성조경은 혁신적인 디자인과 기술을 통해 도시 공간을 미래 지향적이고 지속 가능한 생태계로 변화시키고 있습니다.

고객 여러분의 꿈과 가치를 중시하며, 우리는 전문적이고 창의적인 팀으로서 항상 도전적인 프로젝트에 임하고 있습니다. 삼성조경은 자연과 도시의 조화로운 만남을 통해 미래를 디자인하고, 지속 가능성과 혁신을 통해 새로운 가치를 창출하고자 합니다.

삼성조경 주식회사가 여러분의 미래를 함께 동행하여 이끌어 나가기를 기대합니다.`,
    },
  };

  return (
    <>
      <PageHeader title="인사말" text="삼성조경의 인사말입니다." />
      <main>
        {/* section 태그로 논리적 구획 분리 */}
        <section className="about-area ptb-100" aria-labelledby="greet-title">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              {/* 상단 이미지 영역 (로고 또는 인물 사진) */}
              <div className={styles.top}>
                <div
                  style={{
                    position: "relative",
                    width: "200px",
                    height: "200px",
                    margin: "0 auto",
                  }}
                >
                  <Image
                    src={greetData.info.greet_img}
                    // SEO: 단순 '사진'보다 브랜드명을 포함한 구체적인 alt 텍스트
                    alt="삼성조경 주식회사 공식 로고 및 인사말 이미지"
                    fill
                    style={{ objectFit: "contain" }}
                    priority // 페이지 상단에 위치하므로 빠른 로딩 우선순위
                  />
                </div>
                {greetData.info.greet_img_text && (
                  <p
                    style={{
                      position: "relative",
                      textAlign: "center",
                      marginTop: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {greetData.info.greet_img_text}
                  </p>
                )}
              </div>

              {/* 본문 텍스트 영역 */}
              {/* 본문 텍스트 영역 */}
              <article
                className={styles.content_container}
                style={{ marginTop: "40px" }}
              >
                {/* 🚩 SEO 최적화: h4를 h2로 변경하여 페이지 내 핵심 문구임을 명시 */}
                <h2
                  id="greet-title"
                  style={{
                    fontSize: "1.5rem", // 기존 h4와 유사한 크기로 유지 (필요시 조정)
                    fontWeight: "bold",
                    marginBottom: "25px",
                    color: "#222",
                    lineHeight: "1.4",
                  }}
                >
                  {greetData.info.greet_content_title}
                </h2>

                <p
                  style={{
                    whiteSpace: "pre-wrap",
                    lineHeight: "1.8",
                    color: "#444",
                    wordBreak: "keep-all",
                  }}
                >
                  {greetData.info.greet_content_text}
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Greet;
