import { createServerSupabaseClient } from "@/utils/supabase/server";

export async function GET() {
  const supabase = await createServerSupabaseClient();
  const baseUrl = "https://xn--289a529abkak1w.kr";
  const today = "2026-03-30T00:00:00Z";

  // 로그인은 SEO에서 의미 없으므로 생략 또는 priority 0.1
  const staticURLs = [
    {
      loc: baseUrl,
      lastmod: today,
      changefreq: "monthly",
      priority: "1.0",
    },
    {
      loc: `${baseUrl}/info/basic`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/info/greet`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/info/history`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/info/map`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/info/organization`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/business/construction`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/business/delivery`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/business/design`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/business/facility`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/business/forest`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/business/gardening`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/business/tree`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/article/all`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
    {
      loc: `${baseUrl}/article/construction`,
      lastmod: today,
      changefreq: "monthly",
      priority: "0.9",
    },
  ];

  const noticesBoardId = "541c832d-db8d-4f49-b41a-f0b3f4255482";

  const { data: notices } = await supabase
    .from("posts")
    .select("id, created_at")
    .eq("board_id", noticesBoardId);

  const noticeURLS =
    notices?.map((notice) => ({
      loc: `${baseUrl}/article/${notice.id}`,
      lastmod: new Date(notice.created_at).toISOString(),
      changefreq: "yearly",
      priority: "0.6",
    })) || [];
  const noticesBoardId2 = "641b9ce7-c021-4974-acae-f4459f538516";

  const { data: notices2 } = await supabase
    .from("posts")
    .select("id, created_at")
    .eq("board_id", noticesBoardId2);

  const noticeURLS2 =
    notices2?.map((notice) => ({
      loc: `${baseUrl}/article/${notice.id}`,
      lastmod: new Date(notice.created_at).toISOString(),
      changefreq: "yearly",
      priority: "0.6",
    })) || [];

  const urls = [...staticURLs, ...noticeURLS, ...noticeURLS2]
    .map((url) => {
      return `
     <url>
       <loc>${url.loc}</loc>
       <lastmod>${url.lastmod}</lastmod>
       ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ""}
       <priority>${url.priority}</priority>
     </url>
   `;
    })
    .join("");

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>  
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>
  `.trim();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
