"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(true);
  const [sticky, setSticky] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 170);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeNavbar = () => {
    if (!collapsed) setCollapsed(true);
  };

  const isActive = (path) => (pathname === path ? "active" : "");

  return (
    <header id="navbar" className={`navbar-area ${sticky ? "is-sticky" : ""}`}>
      <div className="tuam-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/" className="navbar-brand" onClick={closeNavbar}>
              <Image
                src="/images/logo.png"
                // SEO: 네이버 이미지 검색 최적화를 위해 브랜드명 명시
                alt="삼성조경 로고 - 조경식재 및 시설물 설치 전문"
                width={130}
                height={50}
                priority
              />
            </Link>

            <button
              onClick={toggleNavbar}
              className={
                collapsed ? "navbar-toggler collapsed" : "navbar-toggler"
              }
              type="button"
              aria-label="메뉴 열기" // SEO/접근성: 국문 서비스라면 한글 라벨 권장
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div
              className={
                collapsed
                  ? "collapse navbar-collapse"
                  : "collapse navbar-collapse show"
              }
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    href="/"
                    className={`nav-link ${isActive("/")}`}
                    onClick={closeNavbar}
                  >
                    Home
                  </Link>
                </li>

                {/* SEO TIP: e.preventDefault()를 쓰면 봇이 해당 링크를 무시할 수 있습니다. 
                   모바일에서 드롭다운을 열기 위한 용도라면, 
                   Link 대신 div나 button으로 처리하거나 실제 메뉴의 메인 페이지로 연결하세요.
                */}
                <li className="nav-item">
                  <Link
                    href="/info/greet" // 대표 URL로 연결 유지
                    className="nav-link"
                    onClick={(e) => {
                      // PC에서는 클릭 시 이동, 모바일에서만 드롭다운 토글을 원할 경우 로직 분리 필요
                      // 일단 SEO 봇이 타고 갈 수 있도록 preventDefault는 신중히 사용해야 합니다.
                    }}
                  >
                    회사소개 <i className="flaticon-down-arrow"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        href="/info/greet"
                        className={`nav-link ${isActive("/info/greet")}`}
                        onClick={closeNavbar}
                      >
                        인사말
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/info/basic"
                        className={`nav-link ${isActive("/info/basic")}`}
                        onClick={closeNavbar}
                      >
                        기본정보
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/info/history"
                        className={`nav-link ${isActive("/info/history")}`}
                        onClick={closeNavbar}
                      >
                        회사연혁
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/info/organization"
                        className={`nav-link ${isActive("/info/organization")}`}
                        onClick={closeNavbar}
                      >
                        조직도
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/info/map"
                        className={`nav-link ${isActive("/info/map")}`}
                        onClick={closeNavbar}
                      >
                        찾아오는길
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/business/forest" className="nav-link">
                    사업영역 <i className="flaticon-down-arrow"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        href="/business/forest"
                        className="nav-link"
                        onClick={closeNavbar}
                      >
                        조경식재공사
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business/facility"
                        className="nav-link"
                        onClick={closeNavbar}
                      >
                        조경시설물설치공사
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business/design"
                        className="nav-link"
                        onClick={closeNavbar}
                      >
                        조경설계(정원설계)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business/gardening"
                        className="nav-link"
                        onClick={closeNavbar}
                      >
                        벽면녹화(수직정원)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business/construction"
                        className="nav-link"
                        onClick={closeNavbar}
                      >
                        정원시공
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business/delivery"
                        className="nav-link"
                        onClick={closeNavbar}
                      >
                        수목납품
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business/tree"
                        className="nav-link"
                        onClick={closeNavbar}
                      >
                        나무병원
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/article/all" className="nav-link">
                    사업실적 <i className="flaticon-down-arrow"></i>
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        href="/article/all"
                        className="nav-link"
                        onClick={closeNavbar}
                      >
                        전체실적
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/article/construction"
                        className="nav-link"
                        onClick={closeNavbar}
                      >
                        시공 · 관리
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
