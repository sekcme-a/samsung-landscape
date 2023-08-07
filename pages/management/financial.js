import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import FinancialCompo from "src/management/Financial"

const data = {
  text1:`(주)동우개발은 공동주택관리 분야를 선도하고 있습니다.
고객 감동서비스를 경영이념으로 실천하며 선진화 된 경영관리 기법을 현장에 적용, 투명한 회계관리 업무를 지원하고 있습니다.`,
  text2:`아파트 운영예산 수립과 진행 과정을 투명하게 운영하기 위해 회계업무 경험이 풍부한 전문가를 통해 통합교육 및 사업장별 방문을 하여 회계업무를 지원합니다.`,
  imgUrl: "https://cdn.imweb.me/thumbnail/20210409/e932cb0d2c43b.jpg",
  list1: [{title:"직원관리 프로그램", content:`아파트관리 분야의 우수인력을 투명하고 공정하게 선발하여 함께 성장해 나가는 동우개발 인력관리 시스템을 운영하고 있습니다.`}],
  list2: [
    {title:"인성교육", content:"책임감, 소속감, 신용교육 등 아파트 회계관리 업무를 위한 인성교육 실시"},
    {title:"회계교육", content:"회계전문가 교육과정을 통해 통합교육, 방문교육을 통해 회계교육 지원"},
    {title:"1:1 컨설팅", content:"본사에서는 분야별 전문가 지원 서비스로 1:1 컨설팅 지원을 하고 있습니다"},
    {title:"회계 감사시스템 운영", content:"공동주택관리법을 기준으로 회계업무 전반에 대한 회계 감사 시스템 운영"},
  ]
}
const Financial = () => {
  return(
    <>

      <PageHeader main="사업분야" sub="회계관리" link="/management/housing"/>

      <FinancialCompo {...{data}}/>
    </>
  )
}

export default Financial