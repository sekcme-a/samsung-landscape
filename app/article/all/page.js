// app/board/page.js (Server Component)

import { createServerSupabaseClient } from "@/utils/supabase/server";
import BoardClient from "./BoardClient";
import PageHeader from "@/components/PageHeader";

// 1. searchParams is now a Promise that needs to be awaited
export default async function BoardPage({ searchParams }) {
  const supabase = await createServerSupabaseClient();
  const board_id = "541c832d-db8d-4f49-b41a-f0b3f4255482";

  // 2. Await the searchParams before accessing .page
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page) || 1;

  const PAGE_SIZE = 12;
  const from = (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const {
    data: posts,
    count,
    error,
  } = await supabase
    .from("posts")
    .select("*", { count: "exact" })
    .eq("board_id", board_id)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("Supabase error:", error);
  }

  return (
    <>
      <PageHeader title="전체실적" text="사업실적 - 전체실적" />
      <main>
        <BoardClient
          initialPosts={posts || []}
          totalCount={count || 0}
          currentPage={currentPage}
          pageSize={PAGE_SIZE}
        />
      </main>
    </>
  );
}
