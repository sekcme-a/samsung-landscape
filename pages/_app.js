import 'src/public/styles/bootstrap.min.css';
import 'src/public/styles/fontawesome.min.css';
import 'src/public/styles/animate.min.css';
import 'src/public/styles/flaticon.css';
import "swiper/css";
import "swiper/css/bundle";
// Global Style
import 'src/public/styles/style.css';
import 'src/public/styles/responsive.css';

import { useRouter } from 'next/router';

import App from 'next/app';
import Head from 'next/head';
import Loader from 'src/public/components/Loader';
import GoTop from 'src/public/components/GoTop';
import Footer from 'src/public/components/Footer';
import Script from 'next/script';
import PageNavbar from "src/public/components/PageNavbar"
import { useEffect } from 'react';

// export default class MyApp extends App {


const MyApp = ({Component, pageProps}) => {
    const router = useRouter()
    // useEffect(() => {
    //     suppressHydrationWarning(false);
    // }, []); 
    // useEffect(())

    useEffect(()=>{},[])
    return(
            <>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>동우그룹 - 깨끗하고 투명한 관리</title>
                </Head>
                {router.pathname!=="/" && <PageNavbar />}
                <Component {...pageProps} />
                
                {/* Preloader */}
                {/* <Loader loading={this.state.loading} /> */}

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
                <Footer />
            </>
    )
}

export default MyApp