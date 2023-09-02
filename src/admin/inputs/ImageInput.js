import { useEffect, useState } from "react";
import useUserData from "context/userData"
import useData from "context/data";
import { useRouter } from "next/router";
import { firestore as db } from "firebase/firebase";
import DropperImage from "public/components/DropperImage"

import { Button, CircularProgress, TextField } from "@mui/material";

const BasicInput = ({type, item, text, defaultImg}) => {
  const {data, setData, handleData} = useData()
  const router = useRouter()

  const [values, setValues] = useState(data[type])
  const onValuesChange = (prop) => (event) => {
      setValues(prevValues => ({...prevValues, [prop]: event.target.value}))
  }

  const [isLoading, setIsLoading] = useState(false)

  const [isImageLoading, setIsImageLoading] = useState(false)



  const onClick = async () => {
  }

  const handleImgUrl = async (url) => {
    console.log(url)
    setValues(prevValues => ({
      ...prevValues,
      [item]: url
    }))
    await db.collection("data").doc(type).update({
      ...values,
      [item]: url
    })
    handleData(type, {
      ...values,
      [item]: url
    })
    alert("적용되었습니다.")
  }

  const onDefaultClick = async () => {
    setIsLoading(true)
    await db.collection("data").doc(type).update({
      ...values,
      [item]: defaultImg
    })
    handleData(type, {
      ...values,
      [item]: defaultImg
    })
    alert("기본값으로 변경되었습니다.")
    setIsLoading(false)
  }
  
  return(
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", minWidth:"400px", flexWrap:'wrap'}}>
      <h5>{text}</h5>
      <DropperImage imgURL={data.main.aboutUsImg} setImgURL={handleImgUrl} path={`data/${type}/${item}`} setLoading={setIsImageLoading} />
      {isImageLoading && <CircularProgress />}
      <Button
        variant="contained"
        onClick={onDefaultClick}
        sx={{ mt:"20px"}}
        size="small"
        disabled={isLoading}
      >
        기본값으로 변경 
      </Button>
    </div>
  )
}

export default BasicInput