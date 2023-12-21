import React, { Component } from 'react';
import Link from 'next/link';

import styles from "./PageHeader.module.css"

import EditButton from "src/admin/EditButton"
import useData from "context/data"

const PageHeader = ({main,sub, type, item}) => {
  const {data} = useData()
    return(
        <>
        <div className="page-title-area item-bg1">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="page-title-content" >
                          <div className={styles.content_container}>
                            <h2>{sub}</h2>
                            <p style={{position:"relative"}}>
                              {data[type][item] ?? `${main} - ${sub}`}
                              <EditButton type={type} item={item} text="제목" />
                            </p>
                          </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default PageHeader;