import Document, { Html, Head, Main, NextScript, } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="zxx">
                <Head>
                    <meta name="naver-site-verification" content="dff4d9c1706e786ef9faec449c45bb43125b7cea" />
                    <link
                        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
                        rel="stylesheet"
                    />
                    <Script
                        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=da751fb23c7f8cc96a72163af91ed742&libraries=services,clusterer&autoload=false`}
                        strategy="beforeInteractive"
                    />
                    {/* <link rel="icon" type="image/png" href="/public/favicon.png"></link> */}
                </Head>
                {/* <Script
                    src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=da751fb23c7f8cc96a72163af91ed742&libraries=services,clusterer&autoload=false`}
                    strategy="beforeInteractive"
                /> */}
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;