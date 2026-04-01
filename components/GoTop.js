"use client";

import React, { useState, useEffect } from "react";

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 감지 및 가시성 토글
  useEffect(() => {
    const toggleVisibility = () => {
      // window.pageYOffset 대신 최신 표준인 window.scrollY 사용
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 스크롤 이벤트 리스너 등록
    window.addEventListener("scroll", toggleVisibility);

    // 컴포넌트 언마운트 시 리스너 제거 (메모리 누수 방지)
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // 최상단으로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div className="go-top" onClick={scrollToTop}>
          <i className="fas fa-chevron-up"></i>
          <i className="fas fa-chevron-up"></i>
        </div>
      )}
    </div>
  );
};

export default GoTop;
