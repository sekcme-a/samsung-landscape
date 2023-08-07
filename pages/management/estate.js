import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import EstateCompo from "src/management/Estate"

const data = {
  text1:`(주)동우개발은 공동주택관리 업계를 선도하고 있습니다.
고객 감동서비스를 경영이념으로 실천하며 선진화 된 경영관리 기법을 현장에 적용 고객의 자산가치 증대를 최우선의 목표로 하고 있습니다.`,
  text2:`고객의 부동산자산가치 극대화를 최우선 목표로 전문지식을 갖춘 부동산 전문가/관리 전문가가 함께
고객에게 최적화된 부동산 자산관리PM(PropertyManagement)서비스를 제공하고 있습니다.`,
  imgUrl: `https://cdn.imweb.me/thumbnail/20220512/446fb2e11de64.jpg`,
}
const Estate = () => {
  return(
    <>

      <PageHeader main="사업분야" sub="부동산자산관리" link="/management/housing"/>

      <EstateCompo {...{data}}/>
    </>
  )
}

export default Estate