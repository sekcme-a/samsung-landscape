import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "조경시설물설치공사",
  description:
    "풍부한 녹지 공간 조성, 조경 시설물 설치, 기능적이고 환경 친화적 설계. 삼성조경의 조경시설물설치공사입니다.",
  url: "/business/facility",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
