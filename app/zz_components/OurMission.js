import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurMission = () => {
  // 실제 데이터는 Props로 받거나 데이터 소스에서 가져오세요.
  const missionData = {
    main: {
      ourMission_bg1: "/images/home/ourMission_bg1.webp",
      ourMission_text1: "", // 텍스트가 비어있을 경우를 대비한 구조 유지
      ourMission_bg2: "/images/home/ourMission_bg2.webp",
      ourMission_text2: "",
    },
  };

  return (
    <section className="our-mission-area" aria-label="삼성조경 사업실적">
      <div className="container-fluid p-0">
        <div className="row m-0">
          {/* 섹션 1: 이미지 (전체 실적 배경) */}
          <div className="col-lg-3 col-md-6 p-0">
            <div
              className="mission-image"
              style={{
                position: "relative",
                minHeight: "350px", // 디자인 유지를 위한 최소 높이 확보
              }}
            >
              <Image
                src={missionData.main.ourMission_bg1}
                alt="삼성조경 조경공사 전체 사업실적 현장 사진"
                fill
                style={{ objectFit: "cover", display: "block" }}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </div>

          {/* 섹션 2: 텍스트 (전체 실적) */}
          <div className="col-lg-3 col-md-6 p-0">
            <div className="mission-text">
              <div className="icon">
                <i className="flaticon-target"></i>
              </div>
              <h3>전체 실적</h3>
              {/* SEO: 내용이 있을 때만 p 태그 렌더링 (빈 태그 방지) */}
              {missionData.main.ourMission_text1 && (
                <p style={{ fontWeight: "normal", position: "relative" }}>
                  {missionData.main.ourMission_text1}
                </p>
              )}
              <Link
                href="/article/all"
                className="default-btn"
                aria-label="삼성조경 전체 사업실적 페이지로 이동"
              >
                보러가기<span></span>
              </Link>
            </div>
          </div>

          {/* 섹션 3: 이미지 (시공/관리 배경) */}
          <div className="col-lg-3 col-md-6 p-0">
            <div
              className="mission-image"
              style={{
                position: "relative",
                minHeight: "350px",
              }}
            >
              <Image
                src={missionData.main.ourMission_bg2}
                alt="삼성조경 정원 시공 및 조경 유지관리 실적 사진"
                fill
                style={{ objectFit: "cover", display: "block" }}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          </div>

          {/* 섹션 4: 텍스트 (시공/관리) */}
          <div className="col-lg-3 col-md-6 p-0">
            <div className="mission-text">
              <div className="icon">
                <i className="flaticon-award"></i>
              </div>
              <h3>시공/관리</h3>
              {missionData.main.ourMission_text2 && (
                <p style={{ fontWeight: "normal", position: "relative" }}>
                  {missionData.main.ourMission_text2}
                </p>
              )}
              <Link
                href="/article/construction"
                className="default-btn"
                aria-label="삼성조경 시공 및 관리 실적 페이지로 이동"
              >
                보러가기<span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
