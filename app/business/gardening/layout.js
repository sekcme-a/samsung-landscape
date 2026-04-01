import { createMetadata } from "@/utils/metadata";

export const metadata = createMetadata({
  title: "벽면녹화(수직정원)",
  description:
    "수직정원의 아름다움과 공간 활용, 다양한 종류의 식물과 조화로운 디자인. 삼성조경의 벽면녹화입니다.",
  url: "/business/gardening",
});

export default function MetaLayout({ children }) {
  return <>{children}</>;
}
