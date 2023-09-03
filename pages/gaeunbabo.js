import { useEffect, useState } from "react";
import useUserData from "context/userData"
import { useRouter } from "next/router";
import { TextField, Button } from "@mui/material";

const Home = () => {
  const {user, userData} = useUserData
  const router = useRouter()
  const [원가, set원가]= useState("")
  const [kg, setKg] = useState("")

  const [일그램, set일그램] = useState("")
  const [일스푼, set일스푼] = useState("")

  useEffect(()=>{

  },[])


  const onClick = () => {
    set일그램(((원가*1.1)/(kg*1000)).toFixed(2)) 
    set일스푼(((원가*1.1)/(kg*1000)*15).toFixed(2)*100/100)
  }

  const handleCopyClickg = () => {
    navigator.clipboard.writeText(일그램);
  };

  const handleCopyClicksp = () => {
    navigator.clipboard.writeText(일스푼);
  };

  
  return(
    <div style={{width:"100vw", height:"100vh", marginTop:"200px", marginLeft:"20px"}}>
      <TextField
        label="원가"
        variant="standard"
        value={원가}
        onChange={(e) => set원가(e.target.value)}
        size="small"
        
      />
      <TextField
        label="무게(kg)"
        variant="standard"
        value={kg}
        onChange={(e) => setKg(e.target.value)}
        size="small"
      />

      <Button
        variant="contained"
        onClick={onClick}
      >
        가은바보
      </Button>
      
      <h1>1g: {일그램}</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCopyClickg}
      >
        복사
      </Button>

      <h1>1sp: {일스푼}</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCopyClicksp}
      > 
        복사
      </Button>

    </div>
  )
}

export default Home