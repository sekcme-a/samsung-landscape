import { useEffect, useState } from "react";
import useUserData from "context/userData"
import { useRouter } from "next/router";
import styles from "./EditControl.module.css"
import useData from "context/data";
import { auth } from "firebase/firebase";

const EditControl = () => {
  const {user, userData} = useUserData()
  const {isEditMode, setIsEditMode} = useData()
  const router = useRouter()


  if((userData?.roles?.includes("dongwoomain_super_admin")||userData?.roles?.includes("super_admin")))
  return(
    <>
        <div className={styles.main_container} >
          <div className={styles.edit_button} onClick={()=>setIsEditMode(!isEditMode)}>
            {isEditMode ? "편집모드 해제" : "편집모드 활성화"}
          </div>
          <div className={styles.logout_button} onClick={()=>{auth.signOut();setIsEditMode(false)}}>
            어드민 해제
          </div>
        </div>
    </>
  )
}

export default EditControl