import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Head from "next/head"
import Script from "next/script"
import OrganizationImage from "src/info/OrganizationImage"



const Organization = () =>{

  return(
    <>
    <Head>

    </Head>

      <PageHeader main="동우그룹" sub="조직도" link="/info/greet"/>

      <OrganizationImage/>

    </>
  )
}

export default Organization