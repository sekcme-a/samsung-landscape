import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const footerData = {
    footer: {
      logo_img: "/images/logo-white.webp",
      content:
        "최신 조경 기술을 적극적으로 도입하여 도시 풍경을 개선하고 자연과 조화를 이루는 삼성조경입니다.",
      location: "서울 도봉구 시루봉로 234 동우빌딩",
      email: "ssung00066@naver.com",
      phone: "02-954-7888",
      fax: "02-954-6888",
      companyName: "삼성조경 주식회사", // 업체명 명시
    },
  };

  return (
    <footer
      className="footer-area"
      style={{
        paddingBottom: "30px",
        backgroundColor: "#2e282e",
        color: "#fff",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          {/* 섹션 1: 로고 및 소개 */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link
                  href="/"
                  style={{ display: "inline-block", marginBottom: "20px" }}
                >
                  <Image
                    src={footerData.footer.logo_img}
                    // SEO: 브랜드명과 핵심 서비스를 포함한 Alt 텍스트
                    alt="삼성조경 - 조경식재 및 시설물 설치공사 전문업체"
                    width={140}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </Link>
                <p style={{ lineHeight: "1.8", color: "#ccc" }}>
                  {footerData.footer.content}
                </p>
              </div>
            </div>
          </div>

          {/* 섹션 2: 바로가기 링크 (내부 링크 구조 강화) */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>사이트 맵</h3>{" "}
              {/* '바로가기'보다 '사이트 맵' 혹은 'Quick Links'가 구조 파악에 용이 */}
              <ul className="footer-quick-links">
                <li>
                  <Link href="/">홈으로</Link>
                </li>
                <li>
                  <Link href="/info/greet">인사말</Link>
                </li>
                <li>
                  <Link href="/info/basic">기본정보</Link>
                </li>
                <li>
                  <Link href="/info/history">회사 연혁</Link>
                </li>
                <li>
                  <Link href="/business/forest">조경식재공사</Link>
                </li>
                <li>
                  <Link href="/business/facility">조경시설물설치공사</Link>
                </li>
                <li>
                  <Link href="/business/design">조경설계</Link>
                </li>
                <li>
                  <Link href="/article/all">전체실적</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 섹션 3: 연락처 정보 (시맨틱 태그 적용) */}
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-footer-widget">
              <h3>Contact Info</h3>
              {/* SEO: 연락처 정보는 address 태그를 사용하는 것이 정석입니다 */}
              <address
                className="footer-contact-info"
                style={{ fontStyle: "normal" }}
              >
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ marginBottom: "10px" }}>
                    <strong>주소:</strong> {footerData.footer.location}
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <strong>이메일:</strong>{" "}
                    <a
                      href={`mailto:${footerData.footer.email}`}
                      style={{ color: "inherit" }}
                    >
                      {footerData.footer.email}
                    </a>
                  </li>
                  <li style={{ marginBottom: "10px" }}>
                    <strong>전화:</strong>{" "}
                    <a
                      href={`tel:${footerData.footer.phone}`}
                      style={{ color: "inherit" }}
                    >
                      {footerData.footer.phone}
                    </a>
                  </li>
                  <li>
                    <strong>팩스:</strong> {footerData.footer.fax}
                  </li>
                </ul>
              </address>
            </div>
          </div>
        </div>

        {/* 저작권 표시 (선택 사항이지만 신뢰도에 도움) */}
        <div
          className="copyright-area"
          style={{
            borderTop: "1px solid #444",
            marginTop: "40px",
            paddingTop: "20px",
            textAlign: "center",
            fontSize: "14px",
            color: "#888",
          }}
        >
          <p>
            © {new Date().getFullYear()} {footerData.footer.companyName}. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
