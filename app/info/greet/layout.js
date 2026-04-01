import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "인사말",
  description:
    "삼성조경은 더 나은 미래를 위한 조경 및 환경 디자인 솔루션을 제공하는 회사입니다.",
  url: "/info/greet",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
