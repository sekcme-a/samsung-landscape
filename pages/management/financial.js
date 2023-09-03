import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import FinancialCompo from "src/management/Financial"


const Financial = () => {
  return(
    <>

      <PageHeader main="사업분야" sub="회계관리" link="/management/housing"/>

      <FinancialCompo />
    </>
  )
}

export default Financial