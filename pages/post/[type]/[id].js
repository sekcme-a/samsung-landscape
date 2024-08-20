import { CircularProgress } from "@mui/material"
import useData from "context/data"
import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react"
import PageHeader from "../../../src/public/PageHeader"
import PostCompo from "src/public/Post"
import HeadMeta from "src/public/HeadMeta"

const Post = () => {
  const router = useRouter()
  const {id, type} = router.query
  const {postsList, fetch_post} = useData()
  const [isLoading, setIsLoading] = useState(true)
  const [hasData, setHasData] = useState(false)
  const [typeText, setTypeText] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      if(postsList[id]){
        console.log(postsList[id])
        setIsLoading(false)
        setHasData(true)
      } else {
        const result = await fetch_post(id)
        setHasData(result)
        setIsLoading(false)
      }
    }
    if(type, id)
      fetchData()
  },[type,id])

  useEffect(() =>{
    if(type==="all")
      setTypeText("전체실적")
    else if(type==="construction")
      setTypeText("시공/관리")
    // else if(type==="plan")
    //   setTypeText("계획/설계")
    else if(type==="tree")
      setTypeText("나무병원")
  },[type])



  return(
    <>
     <HeadMeta
        title="사업실적 - 삼성조경"
        description="삼성조경의 사업실적 게시물입니다. 삼성조경은 조경 및 환경 디자인 솔루션을 제공하는 회사로서, 자연과 도시를 조화롭게 연결하는데 최선을 다하고 있습니다."
        url="https://xn--289a529abkak1w.kr/article/all"
      />

      <PageHeader main={type==="tree" ? "나무병원" : "사업실적"} sub={typeText} type="article" item={`${type}_header_title`}/>

      {isLoading ? 
        <div style={{width:"100vw", marginTop:"100px", marginBottom:"100px", display: "flex", justifyContent:"center"}}>
          <CircularProgress /> 
        </div>
        :
        <PostCompo data={postsList[id]} type={type} id={id}/>
      }
    </>
  )
}

export default Post