// app/board/page.js (Server Component)

import { createServerSupabaseClient } from "@/utils/supabase/server";
import BoardClient from "./BoardClient"; // 클라이언트 인터랙션 담당
import PageHeader from "@/components/PageHeader";

export default async function BoardPage({ searchParams }) {
  const supabase = await createServerSupabaseClient();
  const board_id = "541c832d-db8d-4f49-b41a-f0b3f4255482";

  // URL에서 페이지 번호 가져오기 (기본값 1)
  const currentPage = Number(searchParams?.page) || 1;
  const PAGE_SIZE = 12;
  const from = (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  // 🚩 서버에서 직접 데이터 페칭 (SEO에 매우 유리)
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
