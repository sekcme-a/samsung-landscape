import { NextResponse } from "next/server";

export function GET() {
  const content = `
User-agent: *
Allow: /
Sitemap: https://xn--289a529abkak1w.kr/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
