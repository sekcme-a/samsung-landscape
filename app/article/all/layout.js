import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "전체실적",
  description:
    "삼성조경의 전체실적 현황입니다. 더 나은 환경과 삶을 위한 풍요로움을 창출합니다.",
  url: "/article/all",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
