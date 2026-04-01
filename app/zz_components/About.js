import React from "react";
import Link from "next/link";

const About = () => {
  const aboutData = {
    main: {
      // SEO TIP: 제목에 '전문', '시공' 등 검색 사용자가 입력할만한 단어를 살짝 섞어주면 좋습니다.
      about_title: "도시 풍경을 개선하고 자연과 조화를 이루는 삼성조경",
      about_text: (
        <>
          자연과 도시가 공존하는 아름다운 조화를 꿈꾸며, 우리는{" "}
          <strong>산업과 자연 사이의 조화로운 만남</strong>을 창조합니다.
          <strong>삼성조경 주식회사</strong>는 녹지 공간을 풍부하게 가꾸어
          나가는 데에 열정을 쏟고, 전문적인{" "}
          <strong>조경 기술과 디자인의 혁신</strong>을 통해 새로운 미래를
          열어가고 있습니다.
        </>
      ),
    },
  };

  return (
    <section
      className="about-area ptb-100"
      aria-labelledby="about-section-title"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* 왼쪽: 타이틀 영역 */}
          <div className="col-lg-6 col-md-12">
            <div className="about-title">
              {/* 시각적인 '인사말' 텍스트를 강조하되, 구조적으로 표현 */}
              <span
                className="sub-title"
                style={{
                  fontWeight: "600",
                  display: "block",
                  marginBottom: "10px",
                }}
              >
                인사말
              </span>
              <h2
                id="about-section-title"
                style={{ position: "relative", lineHeight: "1.4" }}
              >
                {aboutData.main.about_title}
              </h2>
            </div>
          </div>

          {/* 오른쪽: 설명 텍스트 영역 */}
          <div className="col-lg-6 col-md-12">
            <div className="about-text" style={{ paddingLeft: "15px" }}>
              <p
                style={{
                  position: "relative",
                  fontWeight: "normal",
                  lineHeight: "1.8",
                  color: "#555",
                  marginBottom: "25px",
                }}
              >
                {aboutData.main.about_text}
              </p>

              {/* SEO: 링크 텍스트에 목적지를 명확히 표현 */}
              <Link
                href="/info/greet"
                className="read-more-btn"
                aria-label="삼성조경 CEO 인사말 페이지로 이동"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
              >
                인사말 상세보기{" "}
                <i className="flaticon-next" style={{ marginLeft: "8px" }}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
