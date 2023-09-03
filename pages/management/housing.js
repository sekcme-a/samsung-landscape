import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import HousingCompo from "src/management/Housing"


const Housing = () => {
  return(
    <>

      <PageHeader main="사업분야" sub="공동주택관리" link="/management/housing"/>

      <HousingCompo />
    </>
  )
}

export default Housing