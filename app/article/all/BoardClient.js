// app/board/BoardClient.js
"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

export default function BoardClient({
  initialPosts,
  totalCount,
  currentPage,
  pageSize,
}) {
  const router = useRouter();

  const totalPages = Math.ceil(totalCount / pageSize);

  // 날짜 포맷팅
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("ko-KR").replace(/\.$/, "");
  };

  // 본문 요약 (SEO를 위해 서버에서 처리하는 것이 더 좋지만, 여기서도 유지)
  const getExcerpt = (htmlContent) => {
    const plainText = htmlContent?.replace(/<[^>]*>?/gm, "") || "";
    return plainText.length > 100
      ? plainText.substring(0, 100) + "..."
      : plainText;
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2>전체 실적</h2>
      </header>

      <div className={styles.grid}>
        {initialPosts.map((post) => (
          <article
            key={post.id}
            className={styles.card}
            onClick={() => router.push(`/article/${post.id}`)}
          >
            <div className={styles.thumbnailWrapper}>
              <Image
                src={post.image_url || "/images/no-image.webp"}
                alt={`${post.title} - 삼성조경`} // 🚩 이미지 alt에도 키워드 포함
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={styles.thumbnailImg}
              />
            </div>

            <div className={styles.contentInfo}>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.excerpt}>{getExcerpt(post.content)}</p>
              <div className={styles.meta}>
                <time dateTime={post.created_at}>
                  {formatDate(post.created_at)}
                </time>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* 🚩 페이지네이션: Link 태그를 사용하는 것이 SEO에 더 좋습니다 (여기서는 쿼리스트링 방식 권장) */}
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`${styles.pageBtn} ${currentPage === i + 1 ? styles.activeBtn : ""}`}
            onClick={() => router.push(`?page=${i + 1}`)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
