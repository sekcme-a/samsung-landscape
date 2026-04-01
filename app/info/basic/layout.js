import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "기본정보",
  description:
    "삼성조경 주식회사는 자연과 도시를 조화롭게 연결하는데 최선을 다하고 있습니다.",
  url: "/info/basic",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
