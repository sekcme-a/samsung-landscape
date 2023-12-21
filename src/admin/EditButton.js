import { useEffect, useState } from "react";
// import useUserData from "context/userData"
import { useRouter } from "next/router";

import useData from "context/data";
import styles from "./EditButton.module.css"

import EditIcon from '@mui/icons-material/Edit';
import { Dialog, TextField } from "@mui/material";


import BasicInput from "./inputs/BasicInput";
import ImageInput from "./inputs/ImageInput";
import ListInput from "./inputs/ListInput";
import ArrOfObjInput from "./inputs/ArrOfObjInput";
import MapInput from "./inputs/MapInput";
import BuildingList from "./inputs/BuildingList";
import ArrOfObjHrdInput from "./inputs/ArrOfObjHrdInput";
import ServicesInput from "./inputs/ServicesInput";
import PartnerInput from "./inputs/PartnerInput";
import ArrObj_TitleText from "./inputs/ArrObj_TitleText";

const EditButton = ({type, item, text, defaultImg,  mode="text", style={}}) => {
  // const {user, userData} = useUserData()
  const {isEditMode} = useData()
  const router = useRouter()
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const [error, setError] = useState("")


  useEffect(()=>{
    if(!item.includes("_"))
      if(type!=="management")
        setError("_를 포함시켜야 합니다.")
      else
        setError("")
    else setError("")

    //원래는 이거 사용하면 됨
    // if(!item.includes("_"))
    //   setError("_를 포함시켜야 합니다.")
    // else setError("")
  },[])

  const onClick = () => {
    setIsOpenDialog(true)
  }
  
  // if(error) return(<>_를 포함시켜야합니다.</>)
  if(isEditMode){
    return(
      <>
        <div className={styles.button} onClick={onClick} style={style}><EditIcon style={{fontSize:"20px", color:"white", zIndex:"99999999"}}/></div>
        <Dialog
          onClose={() => setIsOpenDialog(false)}
          open={isOpenDialog}
        >
          <div className={styles.dialog_container}>
            {/* {type==="number" && <Number />} */}
            {mode==="text" && <BasicInput {...{type, item, text}} />}
            {mode==="image" && <ImageInput {...{type, item, text, defaultImg}} />}
            {mode==="list" && <ListInput {...{type, item, text}} />}
            {mode==="arrOfObj_services" && <ServicesInput {...{type, item, text}} />}
            {mode==="arrOfObj_partner" && <PartnerInput {...{type, item, text}} />}
            {mode==="arrOfObj" && <ArrOfObjInput {...{type, item, text}} />}
            {mode==="arrOfObj_list" && <ArrOfObjHrdInput {...{type, item, text}} />}
            {mode==="map" && <MapInput {...{type, item, text}} />}
            {mode==="building_list" && <BuildingList {...{type, item, text}} />}
            {mode==="arrayOfObj_title_and_text" && <ArrObj_TitleText {...{type, item, text}} />}
            
          </div>
        </Dialog>
      </>
    )
  }
}

export default EditButton