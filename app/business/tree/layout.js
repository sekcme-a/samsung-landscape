import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "나무병원",
  description:
    "삼성조경 나무병원의 진단 및 치료, 예방관리, 상담 및 교육, 유지 관리에 대해 알려드립니다.",
  url: "/business/tree",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
