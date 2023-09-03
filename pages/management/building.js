import PageHeader from "src/public/components/PageHeader"
import BuildingCompo from "src/management/Building"


const Building = () => {
  return(
    <>
      <PageHeader main="사업분야" sub="빌딩종합관리" link="/management/housing"/>

      <BuildingCompo />
    </>
  )
}

export default Building