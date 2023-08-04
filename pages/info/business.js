import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Business from "src/info/Business"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png
const Greet = () =>{


  return(
    <>
      <PageNavbar />

      <PageHeader main="동우그룹" sub="경영방침" link="/info/greet"/>

      <Business />
    </>
  )
}

export default Greet