import PageHeader from "src/public/components/PageHeader"
import BuildingCompo from "src/management/Building"

const data = {
  text1:`(주)동우개발은 공동주택관리 분야를 선도하고 있습니다.
고객감동 서비스를 경영이념으로 실천하며 선진화 된 경영관리 기법을 현장에 적용 집합건물 분야의 선두 기업으로서 책임을 다하고 있습니다.`,
  text2:`빌딩 관리를 통해 건물의 수명 연장과 재산가치 증대를 위해 서비스를 제공하며 이용자에게 편리하고 안전한 공간 제공을 위하여 최선을 다하고 있습니다.`,
  list: [
    {imgUrl:"https://cdn.imweb.me/thumbnail/20210408/974c98b211dd2.png",title:"오피스텔관리",content:"오피스텔 특성에 맞는 관리시스템 도입, 관리단과 협력아혀 자산가치 증대."},
    {imgUrl:"https://cdn.imweb.me/thumbnail/20210408/d4286c4d03bf3.png",title:"상가건물관리",content:"주변 타 상가와 차별화 된 서비스제공, 경비/청소/관리 통합운영."},
    {imgUrl:"https://cdn.imweb.me/thumbnail/20210408/4b501db5cd25a.png",title:"사옥관리",content:"고객의 건물가치를 유지하기 위해 건물 유지관리와 경비미화 서비스제공"},
    {imgUrl:"https://cdn.imweb.me/thumbnail/20210408/ad79a598a5a50.png",title:"호텔관리",content:"고객 중심의 서비스를 제공하며 인력파견 및 실무자 중심의 서비스제공"},
    {imgUrl:"https://cdn.imweb.me/thumbnail/20210408/a9c2cd5770492.png",title:"쇼핑몰관리",content:"청소/경비 등 고객을 최우선으로 생각하는 맞춤형 서비스를 제공."},
    {imgUrl:"https://cdn.imweb.me/thumbnail/20210408/c48f7d847354c.png",title:"병원/특수시설 관리",content:"특화 된 건물에 맞는 전문교육을 받은 인력파견 및 시설관리 서비스 제공."}
  ]
}

const Building = () => {
  return(
    <>
      <PageHeader main="사업분야" sub="빌딩종합관리" link="/management/housing"/>

      <BuildingCompo data={data} />
    </>
  )
}

export default Building