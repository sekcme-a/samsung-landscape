import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import HighchartsChart from "src/info/HighchartsChart"
import Head from "next/head"
import Script from "next/script"


const data = {
  title: "조직도"
}
const Organization = () =>{

  return(
    <>
    <Head>
    {/* <script src="https://code.highcharts.com/modules/organization.js"></script> */}

    </Head>
      <Script src="https://code.highcharts.com/modules/organization.js"/>
      <PageNavbar />

      <PageHeader main="동우그룹" sub="조직도" link="/info/greet"/>

      <HighchartsChart data={data}/>
    </>
  )
}

export default Organization