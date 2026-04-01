"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEditor, EditorContent, Extension } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Link as TiptapLink } from "@tiptap/extension-link";
import { Youtube } from "@tiptap/extension-youtube";
import { TextStyle } from "@tiptap/extension-text-style";
import { FontFamily } from "@tiptap/extension-font-family";
import ResizeImage from "tiptap-extension-resize-image";
import { Calendar, User, Paperclip, List, ArrowLeft } from "lucide-react";

import styles from "./articleDetailClient.module.css"; // CSS Module 임포트
import PageHeader from "@/components/PageHeader";
import { useRouter } from "next/navigation";
// FontSize 익스텐션 (기존과 동일)
const FontSize = Extension.create({
  name: "fontSize",
  addGlobalAttributes() {
    return [
      {
        types: ["textStyle"],
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (element) =>
              element.style.fontSize.replace(/['"]+/g, ""),
            renderHTML: (attributes) =>
              attributes.fontSize
                ? { style: `font-size: ${attributes.fontSize}` }
                : {},
          },
        },
      },
    ];
  },
});

export default function ArticleDetailClient({ post }) {
  const router = useRouter();
  const editor = useEditor({
    editable: false,
    content: post.content,
    extensions: [
      StarterKit,
      TextStyle,
      FontFamily,
      FontSize,
      ResizeImage.configure({ allowBase64: true }),
      TiptapLink.configure({ openOnClick: true }),
      Youtube.configure({ width: 640, height: 360 }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: { class: "prose focus:outline-none" }, // module.css에서 .prose 제어
    },
  });

  useEffect(() => {
    if (editor && post.content) {
      editor.commands.setContent(post.content);
    }
  }, [editor, post.content]);

  return (
    <main className={styles.mainWrapper}>
      <PageHeader title={post.title} text="사업실적" />

      <section className={styles.section}>
        <div className={styles.container}>
          {/* Breadcrumbs */}
          {/* <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/community/notice" className={styles.breadcrumbActive}>
              공지사항
            </Link>
          </nav> */}

          <div className={styles.articleCard}>
            <header className={styles.header}>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.title}
              >
                {post.title}
              </motion.h2>

              <div className={styles.metaContainer}>
                <div className={styles.metaItem}>
                  <User className={styles.metaIcon} />
                  <span className={styles.authorName}>
                    {post.profiles?.full_name || "관리자"}
                  </span>
                </div>
                <div className={styles.metaItem}>
                  <Calendar className={styles.metaIcon} />
                  <span>
                    {new Date(post.created_at).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </header>

            <article className={styles.contentArea}>
              <div className={styles.tiptapWrapper}>
                <EditorContent editor={editor} />
                {!editor && (
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    className="prose"
                  />
                )}
              </div>
            </article>

            {/* 첨부파일 섹션 */}
            {post.file_urls?.length > 0 && (
              <div className={styles.attachmentSection}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <span className={styles.attachmentLabel}>
                    <Paperclip style={{ width: "14px", height: "14px" }} />{" "}
                    Attachments
                  </span>
                  <div className={styles.fileList}>
                    {post.file_urls.map((url, i) => (
                      <a
                        key={i}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.fileLink}
                      >
                        {url.split("/").pop()}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={styles.actionArea}>
            {/* 🚩 Link 대신 button을 사용하고 onClick에 router.back() 연결 */}
            <button
              type="button"
              onClick={() => router.back()}
              className={styles.listBtn}
            >
              <ArrowLeft style={{ width: "1rem", height: "1rem" }} />
              <span>돌아가기</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
