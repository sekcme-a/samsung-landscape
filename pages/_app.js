import 'src/public/styles/bootstrap.min.css';
import 'src/public/styles/fontawesome.min.css';
import 'src/public/styles/animate.min.css';
import 'src/public/styles/flaticon.css';
import "swiper/css";
import "swiper/css/bundle";
// Global Style
import 'src/public/styles/style.css';
import 'src/public/styles/responsive.css';

import App from 'next/app';
import Head from 'next/head';
import Loader from 'src/public/components/Loader';
import GoTop from 'src/public/components/GoTop';

export default class MyApp extends App {
    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
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
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>동우그룹 - 깨끗하고 투명한 관리</title>
                </Head>

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="50" delayInMs="16.66" />
            </>
        );
    }
}