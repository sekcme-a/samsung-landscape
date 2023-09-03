import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import EstateCompo from "src/management/Estate"

const  Estate = () => {
  return(
    <>

      <PageHeader main="사업분야" sub="부동산자산관리" link="/management/housing"/>

      <EstateCompo/>
    </>
  )
}

export default Estate