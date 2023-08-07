import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import ContactContent from "src/contact/ContactContent"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png
const Greet = () =>{


  return(
    <>

      <PageHeader main="고객서비스" sub="사업문의" link="/service/contact"/>

      <ContactContent />
    </>
  )
}

export default Greet