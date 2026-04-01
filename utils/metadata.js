export function createMetadata({ title, description, url }) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://xn--289a529abkak1w.kr${url}`,
      siteName: "삼성조경",
      type: "website",
      images: [
        {
          url: `/images/og_logo.png`,
          width: 1200,
          height: 630,
          alt: `삼성조경 로고`,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [`/images/og_logo.png`],
    },
    alternates: {
      canonical: `https://xn--289a529abkak1w.kr${url}`,
    },
  };
}
