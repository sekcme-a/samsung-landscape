import { Grid } from "@mui/material"
import Type from "src/article/Type"
import PageHeader from "src/public/components/PageHeader"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

const list = [
  {
    id: "test",
    publishedAt: new Date(),
    author: "동우개발",
    title:"[공지사항] 공동주택 선거관리업무 안내서",
    attach:["downloadUrl"],
    content:`안녕하세요, 동우그룹입니다.
공동주택의 선거관리 업무에 관련하여 안내드립니다. 공동주택의 원활한 운영을 위해서는 선거 과정과 관리가 매우 중요합니다. 이에 따라 공동주택 선거관리업무 안내서를 제공하게 되었습니다.
이 안내서는 공동주택 내의 선거 절차, 후보 등록 방법, 투표일정 등에 대한 정보를 포함하고 있습니다. 선거 관련 업무에 참여하시는 분들께서는 반드시 이 안내서를 숙지하시어 공정한 선거가 이루어질 수 있도록 협조해주시기 바랍니다.
안내서를 자세히 읽으시고, 선거 관련 문의사항이나 불분명한 사항이 있을 경우 동우그룹의 관리팀에 문의해주시기 바랍니다. 우리 모두가 협력하여 공동주택의 화합과 원활한 운영을 위해 노력하겠습니다.
감사합니다.

동우그룹 드림`
  },
  {
    id: "test",
    publishedAt: new Date(),
    author: "동우개발",
    title:"[공지사항] 공동주택 선거관리업무 안내서",
    attach:["downloadUrl"],
    content:`안녕하세요, 동우그룹입니다.
공동주택의 선거관리 업무에 관련하여 안내드립니다. 공동주택의 원활한 운영을 위해서는 선거 과정과 관리가 매우 중요합니다. 이에 따라 공동주택 선거관리업무 안내서를 제공하게 되었습니다.
이 안내서는 공동주택 내의 선거 절차, 후보 등록 방법, 투표일정 등에 대한 정보를 포함하고 있습니다. 선거 관련 업무에 참여하시는 분들께서는 반드시 이 안내서를 숙지하시어 공정한 선거가 이루어질 수 있도록 협조해주시기 바랍니다.
안내서를 자세히 읽으시고, 선거 관련 문의사항이나 불분명한 사항이 있을 경우 동우그룹의 관리팀에 문의해주시기 바랍니다. 우리 모두가 협력하여 공동주택의 화합과 원활한 운영을 위해 노력하겠습니다.
감사합니다.

동우그룹 드림`
  },
  {
    id: "test",
    publishedAt: new Date(),
    author: "동우개발",
    title:"[공지사항] 공동주택 선거관리업무 안내서",
    attach:["downloadUrl"],
    content:`안녕하세요, 동우그룹입니다.
공동주택의 선거관리 업무에 관련하여 안내드립니다. 공동주택의 원활한 운영을 위해서는 선거 과정과 관리가 매우 중요합니다. 이에 따라 공동주택 선거관리업무 안내서를 제공하게 되었습니다.
이 안내서는 공동주택 내의 선거 절차, 후보 등록 방법, 투표일정 등에 대한 정보를 포함하고 있습니다. 선거 관련 업무에 참여하시는 분들께서는 반드시 이 안내서를 숙지하시어 공정한 선거가 이루어질 수 있도록 협조해주시기 바랍니다.
안내서를 자세히 읽으시고, 선거 관련 문의사항이나 불분명한 사항이 있을 경우 동우그룹의 관리팀에 문의해주시기 바랍니다. 우리 모두가 협력하여 공동주택의 화합과 원활한 운영을 위해 노력하겠습니다.
감사합니다.

동우그룹 드림`
  },
]



const Article = () => {
  const router = useRouter()
  const {type} = router.query
  const [typeText, setTypeText] = useState("")

  useEffect(() =>{
    if(type==="news")
      setTypeText("동행뉴스")
    else if(type==="24h")
      setTypeText("동우24시")
    else if(type==="gallery")
      setTypeText("동우사보")
  },[type])


  return(
    <>
      <PageHeader main="동행소식" sub={typeText} link={`/article/${type}`}/>

      <Type {...{list, type, typeText}}/>
      
    </>
  )
}

export default Article