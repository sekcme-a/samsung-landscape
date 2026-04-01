const metadata = {
  title: "삼성조경 - 도봉구 조경회사",
  title: {
    default: "삼성조경 - 도봉구 조경회사",
    template: "%s - 삼성조경",
  },
  description:
    "삼성조경은 도봉구 조경 식재, 시설물 설치공사 등 창의적이고 지속 가능한 조경을 추구합니다.",
  icons: { shortcut: "/favicon.ico" },
  keywords: [
    "삼성조경",
    "도봉구 조경",
    "도봉구 조경회사",
    "조경설계",
    "정원조경",
  ],
  openGraph: {
    title: "삼성조경",
    description:
      "삼성조경은 도봉구 조경 식재, 시설물 설치공사 등 창의적이고 지속 가능한 조경을 추구합니다.",
    url: "https://xn--289a529abkak1w.kr", // 실제 도메인으로 변경 필요
    siteName: "삼성조경",
    images: [
      {
        url: "/images/og-logo.png", // public 폴더 내 대표 이미지 경로
        width: 1200,
        height: 630,
        alt: "삼성조경 로고",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "삼성조경",
    description:
      "삼성조경은 도봉구 조경 식재, 시설물 설치공사 등 창의적이고 지속 가능한 조경을 추구합니다.",
    images: ["/images/og-logo.png"],
  },
  alternates: {
    canonical: "https://xn--289a529abkak1w.kr",
  },
};

export default metadata;
