import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/bootstrap.min.css";
import "../styles/fontawesome.min.css";
import "../styles/animate.min.css";
import "../styles/flaticon.css";
import "swiper/css";
import "swiper/css/bundle";
// Global Style
import "../styles/style.css";
import "../styles/responsive.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoTop from "@/components/GoTop";
import Script from "next/script";
import metadata from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export { metadata };
export default function RootLayout({ children }) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta
          name="naver-site-verification"
          content="ae65a57e415dd7b32e251f9a63f355f892b247e0"
        />
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=da751fb23c7f8cc96a72163af91ed742&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <GoTop />
      </body>
    </html>
  );
}
