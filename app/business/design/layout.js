import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "조경설계(정원설계)",
  description:
    "삼성조경의 조경설계는 창의적 디자인과 기술적 전문성, 환경 친화적이고 지속 가능한 접근, 고객과의 긴밀한 협력을 위해 노력합니다.",
  url: "/business/design",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
