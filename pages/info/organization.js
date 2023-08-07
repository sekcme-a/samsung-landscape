import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Head from "next/head"
import Script from "next/script"
import OrganizationImage from "src/info/OrganizationImage"


const data = {
  imgUrl: "https://cdn.imweb.me/thumbnail/20230517/ecca9272490f6.jpg"
}
const Organization = () =>{

  return(
    <>
    <Head>

    </Head>

      <PageHeader main="동우그룹" sub="조직도" link="/info/greet"/>

      <OrganizationImage data={data}/>

    </>
  )
}

export default Organization