import React, { useState, useEffect } from 'react';
import Link from 'src/utils/ActiveLink';
import { NavbarList } from 'src/public/data/navbar';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EditButton from 'src/admin/EditButton';
import useData from 'context/data';

const NavbarTwo = () => {
    const [collapsed, setCollapsed] = useState(true);

    const {data} = useData()

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        const handleScroll = () => {
            const elementId = document.getElementById("navbar");
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <>
            <div id="navbar" className="navbar-area navbar-style-two">
                <div className="tuam-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/logo-white.png" alt="logo" className="white-logo" />

                                    {/* For mobile device */}
                                    <img src="/logo-black.png" alt="logo" className="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    {NavbarList.map((mainItem, index) => {
                                        if (mainItem.child) {
                                            return (
                                                <li className="nav-item" key={index}>
                                                    <Link href={mainItem.url}>
                                                        <a className="nav-link" onClick={e => e.preventDefault()}>
                                                            {mainItem.text} <i className="flaticon-down-arrow"></i>
                                                        </a>
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        {
                                                            mainItem.child.map((subItem, subIndex) => {
                                                                if (subItem.child) {
                                                                    return (
                                                                        <li className="nav-item" key={subIndex}>
                                                                            <Link href={subItem.url}>
                                                                                <a className="nav-link" onClick={e => e.preventDefault()}>{subItem.text}</a>
                                                                            </Link>
                                                                            <ul className="dropdown-menu">
                                                                                {
                                                                                    subItem.child.map((subSubItem, subSubIndex) => (
                                                                                        <li className="nav-item" key={subSubIndex}>
                                                                                            <Link href={subSubItem.url} activeClassName="active">
                                                                                                <a className="nav-link">{subSubItem.text}</a>
                                                                                            </Link>
                                                                                        </li>
                                                                                    ))
                                                                                }
                                                                            </ul>
                                                                        </li>
                                                                    )
                                                                } else {
                                                                    return (
                                                                        <li className="nav-item" key={subIndex}>
                                                                            <Link href={subItem.url} activeClassName="active">
                                                                                <a className="nav-link">{subItem.text}</a>
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                }
                                                            })
                                                        }
                                                    </ul>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <li className="nav-item" key={index}>
                                                    <Link href={mainItem.url} activeClassName="active">
                                                        <a className="nav-link">{mainItem.text}</a>
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>

                                <div className="others-option">
                                    <div className="call-us">
                                        <div className="icon">
                                            <i className="flaticon-call"></i>
                                        </div>
                                        문의하기 :
                                        <span className="number">{data.main.number}<EditButton  type="main" item="number" text="전화번호"/></span>
                                        
                                    </div>


                                    <EditButton type="main" item="youtubeUrl" text="전체 URL (http나 https을 포함해 적어주세요." />
                                    <Link href={data.main.youtubeUrl ?? "/"}>
                                        <a className="default-btn" target='_blank' >
                                        
                                            <>
                                                <YouTubeIcon sx={{ mr: "8px" }}style={{position:"relative"}} />
                                                {data.main.youtubeTitle}
                                                <EditButton type="main" item="youtubeTitle" text="문구" />
                                                
                                            </>
                                            <span></span>
                                        </a>
                                    </Link>
                                    
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarTwo;
