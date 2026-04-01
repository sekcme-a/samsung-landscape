import React from "react";
import Image from "next/image";
import styles from "./organization.module.css";
import PageHeader from "@/components/PageHeader";

const OrganizationImage = () => {
  const orgData = {
    info: {
      organization_title: "삼성조경의 조직도를 소개합니다.",
      organization_text: `각자의 역할과 업무에 대한 중요성을 이해하면서도, 우리는 하나의 큰 팀으로서 상호간에 지지하고 배려하는 분위기를 유지하고 있습니다. 각자의 강점을 살려 효과적으로 협업하며, 다양한 배경과 경험을 존중하고 활용함으로써 더 나은 아이디어와 결과물을 창출하고 있습니다.`,
      organization_img: "/images/info/organization.webp",
    },
  };

  return (
    <>
      <PageHeader title="조직도" text="삼성조경의 조직도를 소개합니다." />
      <main>
        {/* SEO: main 태그 또는 section 태그로 영역 명시 */}
        <section className={styles.main_container} aria-labelledby="org-title">
          {/* 🚩 SEO 최적화: h4를 h2로 변경하여 페이지 내 핵심 제목임을 명시 (디자인 유지) */}
          <h2
            id="org-title"
            style={{
              textAlign: "center",
              color: "black",
              fontWeight: "bold",
              position: "relative",
              fontSize: "1.5rem", // 기존 h4 크기에 맞춰 조정 가능
              marginBottom: "20px",
            }}
          >
            {orgData.info.organization_title}
          </h2>

          {/* 설명 문구 영역 */}
          <p
            style={{
              position: "relative",
              textAlign: "center",
              lineHeight: "1.8",
              maxWidth: "900px",
              margin: "0 auto",
              wordBreak: "keep-all",
            }}
          >
            {orgData.info.organization_text}
          </p>

          {/* 조직도 이미지 영역 */}
          <div
            className={styles.image_wrapper}
            style={{ position: "relative", width: "100%", marginTop: "30px" }}
          >
            {/* 🚩 SEO 최적화: alt 속성에 핵심 키워드 포함 및 구조화 */}
            <Image
              src={orgData.info.organization_img}
              alt="삼성조경 조직도 - 경영지원, 설계팀, 시공팀, 유지관리팀 구성"
              width={1200}
              height={800}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
              priority
              quality={90} // 조직도는 글자가 중요하므로 선명도를 높임
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default OrganizationImage;
