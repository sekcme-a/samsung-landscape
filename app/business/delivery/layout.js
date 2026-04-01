import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "수목납품",
  description:
    "삼성조경의 수목납품은 다양한 종류와 품질의 수목 납품, 환경 적응성 및 조경용도를 고려합니다.",
  url: "/business/delivery",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
