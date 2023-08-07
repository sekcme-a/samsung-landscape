import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import HousingCompo from "src/management/Housing"

const data = {
  text1:`(주)동우개발은 공동주택관리 업계를 선도하고 있습니다.
고객 감동서비스를 경영이념으로 실천하며 선진화 된 경영관리 방법을 현장에 적용하여 공동주택관리 업계를 선도하는 기업으로서의 책임을 다하고 있습니다.`,
  imgUrl1: `https://cdn.imweb.me/thumbnail/20210407/f36753181e009.png`,
  text2:`공동주택 종합관리는 건물시설관리, 인력관리, 회계관리, 경비보안, 조경, 미화, 위생관리 등 다양한 전문분야를 아우르는 복잡한 업무로서 축적된 경험과 기술력을 바탕으로 서비스를 지원하고 있습니다.`,
  imgUrl2: `https://cdn.imweb.me/thumbnail/20210422/cd4ec2f5e5a20.png`,

  text3: `(주)동우개발의 고객 서비스 질 향상을 위한 3S 시스템 구현`,
  smile: `건강한 얼굴, 미소 머금은 얼굴. 단정한 용모, 명랑한 음성, 정중한 태도, 평소 상황에 따른 대응훈련.`,
  service: `친절응대, 고객의 입장에서의 공감과 이해, 정중한 자세와 일 처리, 고객과의 약속 이행, 사후 점검.`,
  speed: `재빠른 행동, 신속한 처리, 일의 표준화, 고객의 일부터 처리하는 신속함.`
}
const Housing = () => {
  return(
    <>

      <PageHeader main="사업분야" sub="공동주택관리" link="/management/housing"/>

      <HousingCompo {...{data}}/>
    </>
  )
}

export default Housing