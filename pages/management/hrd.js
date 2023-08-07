
import PageHeader from "src/public/components/PageHeader"
import HrdCompo from "src/management/Hrd"

const data = {
  text1:`(주)동우개발은 공동주택관리 업계를 선도하고 있습니다.
고객 감동서비스를 경영이념으로 실천하며 선진화 된 경영관리 방법을 현장에 적용하기 위해 각 분야의 전문적인 인재채용과 인사관리 업무를 관리 및 지원하고 있습니다.`,
  text2:`정보통신기술을 기반으로 우수한 인력을 채용에서부터 관리까지 사내 그룹웨어인 동행웨어를 구축하여 꼼꼼하게 통합관리를 하고 있습니다.`,
  imgUrl:"https://cdn.imweb.me/thumbnail/20210408/ae9d3227282f4.png",
  list1: [
    {title: "우수인력 채용", content:"아파트관리 분야의 우수인력을 투명하고 공정하게 선발하여 함께 성장해나가는 동우개발 인력관리 시스템을 운영하고 있습니다."},
    {title:"직원관리 프로그램", content:"아파트관리 분야의 우수인력을 투명하고 공정하게 선발하여 함께 성장해나가는 동우개발 인력관리 시스템을 운영하고 있습니다."}
  ],
  list2: [
    {title: "통합교육", content: "관리소장, 경리, 법무, 노무, 세무, 회계등 부서별 통합교육"},
    {title:"실무교육", content:"직책 및 직무별 관리업무에 관한 현장에 필요한 실무교육 실시"},
    {title:"오피스텔 관리", content:"우수직원 포상 제도를 실시, 소속감 및 업무에 대한 책임감과 동기부여 강화"}
  ]
}
const Estate = () => {
  return(
    <>

      <PageHeader main="사업분야" sub="인사관리" link="/management/housing"/>

      <HrdCompo {...{data}}/>
    </>
  )
}

export default Estate