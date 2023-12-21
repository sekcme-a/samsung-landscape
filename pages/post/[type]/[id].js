import { CircularProgress } from "@mui/material"
import useData from "context/data"
import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react"
import PageHeader from "../../../src/public/PageHeader"
import PostCompo from "src/public/Post"

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
    else if(type==="plan")
      setTypeText("계획/설계")
  },[type])



  return(
    <>
      <PageHeader main="사업실적" sub={typeText} type="article" item={`${type}_header_title`}/>

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