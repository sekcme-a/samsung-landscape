import '../styles/bootstrap.min.css';
import '../styles/fontawesome.min.css';
import '../styles/animate.min.css';
import '../styles/flaticon.css';
import "swiper/css";
import "swiper/css/bundle";
// Global Style
import '../styles/style.css';
import '../styles/responsive.css';

import Navbar from "src/public/Navbar"
import App from 'next/app';
import Head from 'next/head';
import Loader from "src/public/Loader"
import GoTop from '../src/public/GoTop';
import Footer from "src/public/Footer"


import { UserDataProvider } from "context/userData";
import { DataProvider } from "context/data";

import AuthStateChanged from "src/hooks/AuthStateChanged";

import EditControl from "src/admin/EditControl";


export default class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 100); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                    <meta charSet="utf-8" />
                    <link rel="canonical" href="https://xn--289a529abkak1w.kr"></link>
                    <meta name="robots" content="index,follow"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>

                <UserDataProvider>
                    <DataProvider>
                    <AuthStateChanged>
                        <Navbar />
                        <Component {...pageProps} />
                        <EditControl />
                        <Loader />
                        <Footer />
                    </AuthStateChanged>
                    </DataProvider>
                </UserDataProvider>
                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </>
        );
    }
}