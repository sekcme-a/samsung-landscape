import PageNavbar from "src/public/components/PageNavbar"
import PageHeader from "src/public/components/PageHeader"
import Greetings from "src/info/Greetings"
//https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png

const data = {
  content: `이와 같은 목적을 달성하기 위해서는 회사의 이익도 중요하지만
관리의 공익성을 추구하며 투명하고 신뢰받는 관리, 시설물의 하자 없는 관리, 질적인 환경 조성 관리,
입주민과 함게 하는 공동체 문화 형성이 중요합니다.

공동주택 및 복합건물의 관리목적은 시설물의 성능과 수명을 연장시키고 주거환경을 쾌적하게 조성한다는 것이라 생각합니다.
현대의 건축물은 과거의 단순한 사용목적만을 충족시키는 공간 확보의 개념에서 벗어나
좀 더 쾌적한 공간, 능률적인 기능 공간으로서의 복합적인 역할을 요구받고 있습니다.
따라서 이를 완벽하게 운영하기 위해서는 고도로 훈련되고 전문적인 지식을 갖춘 관리요원들이
필수적이라 하겠으며, 저희들은 입주민들의 재산이 바로 나의 것이라는 주인의식과 선량한 관리자로서의 
사명감을 가지고 맡겨주신 건축물 관리에 최선을 다할 것을 다짐합니다.

당사는 그동안의 축적된 관리 능력과 공신력을 바탕으로 지속적으로 새로운 관리 방법을 창출하고
관리요원의 자질 향상과 봉사 자세의 생활화로 한층 더 노력할 것을 약속드리오니 계속적인 협조와 성원을
부탁드리며 여러분의 가정에 행복과 건강이 함께 하시기를 진심으로 기원합니다.

감사합니다.`,
  name: "이육행",
  headImg: "https://cdn.imweb.me/thumbnail/20220721/d57f018ea93e2.png",
  signImg: "https://cdn.imweb.me/upload/S202104058bb2801ba27b7/d1d00c82e785b.png"
}


const Greet = () =>{


  return(
    <>

      <PageHeader main="동우그룹" sub="인사말" link="/info/greet"/>

      <Greetings {...{data}}/>
    </>
  )
}

export default Greet