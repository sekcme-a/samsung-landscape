import { auth } from "firebase/firebase";
import { useEffect, useState } from "react";
import useUserData from "context/userData";
import { firestore as db } from "firebase/firebase";
import { useRouter } from "next/router";


export default function AuthStateChanged({ children }) {
  const {setUser, setUserData} = useUserData()
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()


  
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user)
      //로그인시
      if (user !== null ) {
        db.collection("user").doc(user.uid).get().then((doc) => {
          if (doc.exists && (doc.data().roles.includes("samsung_super_admin")||doc.data().roles.includes("super_admin"))){
            setUserData(doc.data())
          }else{
            alert("접근 권한이 없습니다.")
            auth.signOut()
          }
          
          setIsLoading(false)
        })
      } else{
        //로그아웃시
        setUser(null)
        setUserData(null)
        setIsLoading(false)
      }
    })
  }, []);

  // if(isLoading)return <></>

  return children;
}