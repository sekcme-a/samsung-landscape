import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="kr">
                <Head>
                <meta charSet="UTF-8" />
                <meta name="author" content="삼성조경,주식회사 삼성조경,(주)삼성조경" />
                <meta name="naver-site-verification" content="ae65a57e415dd7b32e251f9a63f355f892b247e0" />
                <meta name="google-site-verification" content="Iu9YBqCGSttmCx7aq37awDRuxt3EH-OoJR_3yKJb7Ak" />
                    <link
                        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
                        rel="stylesheet"
                    />
                    <link rel="icon" type="image/png" href="https://xn--289a529abkak1w.kr/images/favicon.png"></link>
                    <link rel="canonical" href="https://xn--289a529abkak1w.kr" />
                    <meta property="og:site_name" content="삼성조경" />
                    <Script
                        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=da751fb23c7f8cc96a72163af91ed742&libraries=services,clusterer&autoload=false`}
                        strategy="beforeInteractive"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;