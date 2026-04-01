import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "조직도",
  description: "도봉구 조경회사 삼성조경의 조직도를 소개합니다.",
  url: "/info/organization",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
