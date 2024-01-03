import Head from "next/head";

const HeadMeta = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title || "삼성조경"}</title>
      <meta
        name="description"
        content={
          description ||
          "삼성조경, 더 나은 환경과 삶은 위한 풍요로움을 창출합니다. 자연과 도시가 공존하는 아름다운 조화를 꿈꾸며, 우리는 산업과 자연 사이의 조화로운 만남을 창조합니다."
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "삼성조경"} />
      <meta property="og:description"
        content={
        description ||
        "삼성조경, 더 나은 환경과 삶은 위한 풍요로움을 창출합니다. 자연과 도시가 공존하는 아름다운 조화를 꿈꾸며, 우리는 산업과 자연 사이의 조화로운 만남을 창조합니다."
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