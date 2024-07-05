import React, { useEffect, useState } from 'react';

import styles from "./PopUp.module.css"
import useData from 'context/data';

import { firestore as db } from 'firebase/firebase';
import { Checkbox } from '@mui/material';

const PopUp = () => {

    const [popupList, setPopupList] = useState([])

    useEffect(()=>{
      // localStorage.clear()
        const fetchData = async () => {
            const popupSnapshot = await db.collection("team").doc("samsung").collection("posts").where("type","==","popup").where("condition","==","게제중").orderBy("savedAt","asc").get()
            if(!popupSnapshot.empty){
              const list = popupSnapshot.docs.map((doc) => {
                const expireDate = localStorage.getItem(doc.id)
                let TODAY_DATE = new Date()

                if(!expireDate || expireDate < TODAY_DATE){
                  localStorage.removeItem(doc.id)
                  return{...doc.data(), id: doc.id}
                }
              }).filter(Boolean)
              setPopupList(list)
              console.log(list)
            }
            
        }
        fetchData()
    },[])


    const handleClose = (index) => {
      const list = popupList.map((item, ind) => {
        if(ind===index && !item.isClose)
          return(
            {...item, isClose: true}
          )
        else
            return(
              {...item}
          )
      })
      setPopupList(list)
    }

    const handleNotToday = (index) => {
      const list = popupList.map((item, ind) => {
        if(ind===index && !item.isClose){
          let expires = new Date();
          expires = expires.setHours(expires.getHours() +24);
          localStorage.setItem(item.id, expires)
          return(
            {...item, isClose: true}
          )
        }
        else
            return(
              {...item}
          )
      })
      setPopupList(list)
    }


    const handlePopupClick = (url) => {
      if(url && url!=="")
       window.open(url,'_blank')
    }

    return (
        <>
          {popupList.map((item, index) => {
            if(!item.isClose)
            return(
              <div
                className={`${styles.main_container} ${styles[`main_${index}`]} ${item.isHeight? styles.isHeight: styles.isWidth} ${item.linkUrl && item.linkUrl!=="" ? styles.hasUrl: styles.noUrl}`} key={index}>
                <img src={item.thumbnailImg} alt={item.title?? "팝업"} onClick={()=>handlePopupClick(item.linkUrl)}/>

                <div className={styles.bottom_container}>
                  <h4>{item.title}</h4>
                  <div className={styles.handle_container}>
                    <div className={styles.not_today} onClick={()=>handleNotToday(index)}>24시간동안 그만보기</div>
                    <div className={styles.close} onClick={()=>handleClose(index)}>닫기</div>
                  </div>
                </div>
              
              </div>
            )
          })}
        </>
    );
};

export default PopUp;
