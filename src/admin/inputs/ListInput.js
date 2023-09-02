import { useEffect, useState } from "react";
import useUserData from "context/userData"
import useData from "context/data";
import { useRouter } from "next/router";
import { firestore as db } from "firebase/firebase";

import { Button, TextField } from "@mui/material";

const ListInput = ({type, item, text}) => {
  const {data, setData, handleData} = useData()
  const router = useRouter()

  const [values, setValues] = useState([""])

  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    console.log(data[type][item])
    if(data[type][item]) setValues([...data[type][item]])
  },[])

  const onAddClick = () => {  
    if(!values) setValues ([""])
    else setValues([...values, ""]); // Create a new array with the additional value
  }
  const onDeleteClick = (index) => {
    const updatedValues = [...values];
    updatedValues.splice(index, 1); // Remove the item at the specified index
    setValues(updatedValues);
  }

  const onClick = async () => {
    if(!values || values.length===0 || values[0]=== ""){
      alert("빈칸으로 저장할 수 없습니다.")
      return;
    }
    setIsLoading(true)
    await db.collection("data").doc(type).update({...data[type], [item] : values})
    handleData(type, {...data[type], [item] : values})
    setIsLoading(false)
  }

  const onValuesItmChange = (prop) => (e) => {
    const temp = [...values]; // Create a new array using the spread operator
    temp[prop] = e.target.value;
    setValues(temp);
  };
  
  return(
    <>
    <div>
      {
        values?.map((itm, index) => (
          <div key={index} style={{display:"flex", justifyContent:"center", alignItems:"center", minWidth:"400px", marginBottom:"10px"}}>
            <TextField
              label={text}
              variant="standard"
              value={itm}
              onChange={onValuesItmChange(index)}
              size="small"
              multiline
              fullWidth
            />

            <Button
            variant="contained"
            onClick={() => onDeleteClick(index)}
            sx={{ml:"20px", width:"100px"}}
            size="small"
            disabled={isLoading}
            color="error"
          >
            줄 삭제-
          </Button>
        </div>
        ))
      }
    </div>

      <Button
        variant="contained"
        onClick={onAddClick}
        sx={{mb:"20px"}}
        size="small"
        disabled={isLoading}
        fullWidth
        color='secondary'
      >
        줄 추가 +
      </Button>
      <Button
        variant="contained"
        onClick={onClick}
        size="small"
        disabled={isLoading}
        fullWidth
      >
        {isLoading ? "적용 중" : "적용"}  
      </Button>
     </>
  )
}

export default ListInput