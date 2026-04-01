import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "조경식재공사",
  description:
    "조경식재공사의 환경 친화성과 지속 가능성, 삼성조경의 조경식재공사를 소개해드립니다.",
  url: "/business/forest",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
