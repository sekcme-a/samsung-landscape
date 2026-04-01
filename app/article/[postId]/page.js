import { createClient } from "@/utils/supabase/client";
import { notFound } from "next/navigation";
import { createServerSupabaseClient } from "@/utils/supabase/server";
import ArticleDetailClient from "./ArticleDetailClient";

// 동적 SEO 메타데이터 설정
export async function generateMetadata({ params }) {
  const { postId } = await params;
  const supabase = await createClient();

  const { data: post } = await supabase
    .from("posts")
    .select("title, content")
    .eq("id", postId)
    .single();

  if (!post) return { title: "게시글을 찾을 수 없습니다" };

  // 본문 요약 (Description용)
  const description = post.content?.replace(/<[^>]*>/g, "").slice(0, 45);

  return {
    title: `${post.title}`,
    description: description || "삼성조경의 새로운 소식을 전해드립니다.",
    openGraph: {
      title: post.title,
      description: description,
      type: "article",
    },
  };
}

export default async function Page({ params }) {
  const { postId } = await params;
  const supabase = await createServerSupabaseClient();

  // 서버에서 게시글 데이터 가져오기
  const { data: post, error } = await supabase
    .from("posts")
    .select("*, profiles(full_name)")
    .eq("id", postId)
    .single();

  if (error || !post) {
    notFound();
  }

  return <ArticleDetailClient post={post} />;
}
