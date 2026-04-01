import React from "react";
import Link from "next/link";

const About2 = () => {
  const aboutData = {
    main: {
      about2_title:
        "최신의 조경 기술과 혁신적인 해결책을 통해, 지속적인 만족을 제공합니다.",
      about2_text: (
        <>
          삼성 조경은 높은 수준의 <strong>디자인 팀</strong>을 보유하고
          있습니다. 풍부한 경험과 창의성을 가진 디자이너들은 다양한 환경에서의
          <strong>조경 디자인</strong>에 대한 전문 지식을 보유하고 있습니다.
        </>
      ),
    },
  };

  return (
    <section className="about-area ptb-100" aria-labelledby="about2-title">
      <div className="container">
        <div className="row align-items-center">
          {/* 왼쪽: 설명 텍스트 영역 */}
          <div className="col-lg-5 col-md-12 custom-different-order">
            <div className="about-text">
              <p style={{ position: "relative", fontWeight: "normal" }}>
                {aboutData.main.about2_text}
              </p>

              <Link
                href="/info/basic"
                className="read-more-btn"
                aria-label="삼성조경 기본정보 보러가기"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <i
                    className="flaticon-next"
                    style={{
                      transform: "rotate(180deg)",
                      marginRight: "5px",
                      marginTop: "-2px",
                    }}
                  ></i>
                  기본정보 보러가기
                </div>
              </Link>
            </div>
          </div>

          {/* 오른쪽: 타이틀 영역 */}
          <div className="col-lg-7 col-md-12">
            <div
              className="about-title custom-about-title"
              style={{ borderRight: "0", borderLeft: "1px solid #dfdddf" }}
            >
              <span style={{ display: "block", textAlign: "end" }}>
                회사 소개
              </span>
              {/* id를 부여하여 섹션 전체의 제목임을 검색엔진에 알림 */}
              <h2
                id="about2-title"
                style={{ position: "relative", textAlign: "end" }}
              >
                {aboutData.main.about2_title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
