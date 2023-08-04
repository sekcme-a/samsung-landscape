import Document, { Html, Head, Main, NextScript } from 'next/document';

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
                    {/* <link rel="icon" type="image/png" href="/public/favicon.png"></link> */}
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