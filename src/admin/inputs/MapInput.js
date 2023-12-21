import { useEffect, useState } from "react";
import useUserData from "context/userData"
import useData from "context/data";
import { useRouter } from "next/router";
import { firestore as db } from "firebase/firebase";

import { Button, TextField } from "@mui/material";

const MapInput = ({type, item, text}) => {
  const {data, setData, handleData} = useData()
  const router = useRouter()

  const [values, setValues] = useState(data[type])
  const onValuesChange = (prop) => (event) => {
      setValues(prevValues => ({...prevValues, [prop]: event.target.value}))
  }

  const [isLoading, setIsLoading] = useState(false)


  const onClick = async () => {
    if(values[item]===""){
      alert("빈칸으로 저장할 수 없습니다.")
      return;
    }
    setIsLoading(true)
    await db.collection("samsung").doc(type).update(values)
    handleData(type, values)
    setIsLoading(false)
  }
  
  return(
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", minWidth:"400px", flexWrap:"wrap"}}>
      <h5 style={{width:"100%", textAlign:"center"}}>{text}</h5>
      <p style={{width:"100%", textAlign:"center", marginBottom:"0", color:"black"}}>아래를 클릭해서 경도와 위도를 찾아보실 수 있습니다.</p>
      <a target="_blank" href="http://map.esran.com" rel="noreferrer" >링크로 이동</a>
      <TextField
        label="위도"
        variant="standard"
        value={values?.map_locX}
        onChange={onValuesChange("map_locX")}
        size="small"
        // onKeyDown={onKeyDown}
        multiline
        fullWidth
      />
      <TextField
        label="경도"
        variant="standard"
        value={values?.map_locY}
        onChange={onValuesChange("map_locY")}
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
        style={{marginTop: "30px"}}
      >
        {isLoading ? "적용 중" : "적용"}  
      </Button>
    </div>
  )
}

export default MapInput