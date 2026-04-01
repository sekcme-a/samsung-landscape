import React from "react";
import Image from "next/image";

const PageHeader = ({ title, text }) => {
  return (
    // section 태그를 사용하여 문서 구조의 명확성 부여 (디자인 영향 없음)
    <header
      className="page-title-area"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "300px",
      }}
    >
      {/* 🚩 이미지 최적화: alt 속성에 핵심 키워드 조합 유지 */}
      <Image
        src="/images/main-banner1.webp"
        alt={`${title} 전문 삼성조경`}
        fill
        priority
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
        sizes="100vw"
      />

      <div
        className="image-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.45)",
          zIndex: 0,
        }}
      />

      <div className="d-table" style={{ position: "relative", zIndex: 1 }}>
        <div className="d-table-cell">
          <div className="container">
            <div className="page-title-content">
              {/* 텍스트 래퍼에 시맨틱 정보 보강 */}
              <div
                style={{
                  color: "white",
                  marginTop: "10px",
                  fontWeight: "normal",
                }}
              >
                {/* 🚩 h1: 페이지 주제 명시 (폰트 스타일은 기존 유지) */}
                <h1
                  style={{
                    margin: 0,
                    color: "white",
                  }}
                >
                  {title}
                </h1>

                {/* p: 설명 문구 */}
                {text && (
                  <p
                    style={{
                      position: "relative",
                      color: "white",
                      marginTop: "15px",
                    }}
                  >
                    {text}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
