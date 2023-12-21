import { useEffect, useState } from "react";
import useUserData from "context/userData"
import useData from "context/data";
import { useRouter } from "next/router";
import { firestore as db } from "firebase/firebase";

import { Button, TextField } from "@mui/material";

const BasicInput = ({type, item, text}) => {
  const {data, setData, handleData} = useData()
  const router = useRouter()

  const [values, setValues] = useState(data[type])
  const onValuesChange = (prop) => (event) => {
      setValues(prevValues => ({...prevValues, [prop]: event.target.value}))
  }

  const [isLoading, setIsLoading] = useState(false)


  const onKeyDown = (e) => {
    if(e.key==="Enter")
      onClick()
  }

  const onClick = async () => {
    if(values[item]===""){
      alert("빈칸으로 저장할 수 없습니다.")
      return;
    }
    setIsLoading(true)
    if(type==="housing" || type==="building" || type==="estate" || type==="hrd" || type==="financial")
      await db.collection("data").doc(type).update(values)
    else
      await db.collection("samsung").doc(type).update(values)
    handleData(type, values)
    setIsLoading(false)
  }
  
  return(
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", minWidth:"400px"}}>
      <TextField
        label={text}
        variant="standard"
        value={values[item]}
        onChange={onValuesChange(item)}
        size="small"
        // onKeyDown={onKeyDown}
        multiline
        fullWidth
      />
      <Button
        variant="contained"
        onClick={onClick}
        sx={{ml:"20px"}}
        size="small"
        disabled={isLoading}
      >
        {isLoading ? "적용 중" : "적용"}  
      </Button>
    </div>
  )
}

export default BasicInput