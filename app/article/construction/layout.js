import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "시공/관리",
  description: "도봉구 조경회사 삼성조경의 시공와 관리 현황을 전해드립니다.",
  url: "/article/construction",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
