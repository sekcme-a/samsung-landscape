import { CircularProgress } from "@mui/material"
import useData from "context/data"
import { useRouter } from "next/router"
import { useState } from "react"
import { useEffect } from "react"
import PageHeader from "src/public/components/PageHeader"
import PostCompo from "src/public/components/Post"

const Post = () => {
  const router = useRouter()
  const {id, type} = router.query
  const {postsList, fetch_post} = useData()
  const [isLoading, setIsLoading] = useState(true)
  const [hasData, setHasData] = useState(false)

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


  return(
    <>
      <PageHeader main="공지사항" sub={isLoading ? "" : postsList[id]?.title} link="/article/announcement"/>

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