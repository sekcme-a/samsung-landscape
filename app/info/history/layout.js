import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "회사연혁",
  description: "삼성조경의 창립부터 현재까지의 회사연혁을 안내드립니다.",
  url: "/info/history",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
