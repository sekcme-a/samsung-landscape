import Head from "next/head";

const HeadMeta = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title || "삼성조경"}</title>
      <meta
        name="description"
        content={
          description ||
          "삼성조경은 더 나은 환경과 삶을 위한 풍요로움을 창출합니다."
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "삼성조경"} />
      <meta property="og:description"
        content={
        description ||
        "삼성조경은 더 나은 환경과 삶을 위한 풍요로움을 창출합니다."
      }/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://xn--289a529abkak1w.kr"} />
      <meta property="og:image" content={"https://xn--289a529abkak1w.kr/images/logo.png" } />
      <meta name="keywords" content="삼성조경"/>
      <meta property="og:article:author" content="삼성조경" />
    </Head>
  );
};

export default HeadMeta;