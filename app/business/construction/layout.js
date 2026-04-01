import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "정원시공",
  description:
    "삼성조경의 정원시공을 소개합니다. 특화된 정원 디자인과 기술적 시공 노하우, 다양한 식물과 조경소품 활용.",
  url: "/business/construction",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
