import React from "react";
import KakaoMap from "./KakaoMap";
import PageHeader from "@/components/PageHeader";

const Map = () => {
  const mapData = {
    info: {
      map_title_top: "삼성조경",
      map_title: "찾아오는 길 안내",
      map_subtitle: "삼성조경으로 찾아오는 길을 안내드립니다.",
      map_address: `서울특별시 도봉구 시루봉로 234, 동우빌딩 2층\n지번: 방학동 622-33`,
      map_subway: "1호선 방학역 1번 출구 도보 14분",
      map_bus: `방학2동주민센터 92m (지선 1128, 1139, 1167 일반 72-3)\n방학2동공영주차장 110m (지선 1128, 1139, 1167 일반 72-3)`,
      map_locX: 37.668,
      map_locY: 127.035,
    },
  };

  return (
    <>
      <PageHeader title="찾아오는 길" text="회사소개 - 찾아오는 길" />
      <main>
        {/* SEO: section 태그와 id를 연결하여 구조화 */}
        <section className="contact-area ptb-100" aria-labelledby="map-title">
          <div className="container">
            <div className="row">
              {/* 왼쪽: 텍스트 안내 영역 */}
              <div className="col-lg-6 col-md-12">
                <div className="section-title">
                  <span className="sub-title" style={{ position: "relative" }}>
                    {mapData.info.map_title_top}
                  </span>
                  {/* 🚩 SEO 최적화: h2 태그로 페이지 내 주요 소제목 명시 */}
                  <h2 id="map-title" style={{ position: "relative" }}>
                    {mapData.info.map_title}
                  </h2>
                  <p style={{ fontWeight: "normal", color: "#666" }}>
                    {mapData.info.map_subtitle}
                  </p>
                </div>

                <div className="contact-info">
                  {/* SEO: 주소 정보를 address 태그로 감싸 장소 정보임을 명시 */}
                  <address style={{ fontStyle: "normal" }}>
                    <ul
                      className="contact-list"
                      style={{ listStyle: "none", padding: 0 }}
                    >
                      <li
                        style={{
                          whiteSpace: "pre-line",
                          paddingLeft: "0",
                          marginBottom: "20px",
                        }}
                      >
                        <strong
                          style={{
                            display: "block",
                            color: "#333",
                            marginBottom: "5px",
                          }}
                        >
                          주소
                        </strong>
                        {mapData.info.map_address}
                      </li>

                      <li
                        style={{
                          whiteSpace: "pre-line",
                          paddingLeft: "0",
                          marginBottom: "20px",
                        }}
                      >
                        <strong
                          style={{
                            display: "block",
                            color: "#333",
                            marginBottom: "5px",
                          }}
                        >
                          지하철 이용 시
                        </strong>
                        {mapData.info.map_subway}
                      </li>

                      <li style={{ whiteSpace: "pre-line", paddingLeft: "0" }}>
                        <strong
                          style={{
                            display: "block",
                            color: "#333",
                            marginBottom: "5px",
                          }}
                        >
                          버스 이용 시
                        </strong>
                        {mapData.info.map_bus}
                      </li>
                    </ul>
                  </address>
                </div>
              </div>

              {/* 오른쪽: 지도 영역 */}
              <div className="col-lg-6 col-md-12">
                <div
                  className="map-container"
                  style={{
                    position: "relative",
                    marginTop: "40px",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  {/* 좌표 데이터가 있을 때만 KakaoMap 렌더링 */}
                  {mapData.info.map_locX && mapData.info.map_locY && (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        minHeight: "400px",
                      }}
                    >
                      <KakaoMap
                        title="삼성조경 본사"
                        locX={mapData.info.map_locX}
                        locY={mapData.info.map_locY}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Map;
