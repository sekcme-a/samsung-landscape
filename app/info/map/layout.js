import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "찾아오는 길",
  description:
    "삼성조경에 찾아오는 길을 안내드립니다. 서울특별시 도봉구 시루봉로 234, 동우빌딩 2층",
  url: "/info/map",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
