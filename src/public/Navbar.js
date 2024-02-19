import React, { Component } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';

class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area">
                    <div className="tuam-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/logo.png" alt="logo" style={{width:"130px"}}/>
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
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
                                        <li className="nav-item">
                                            <Link href="/" activeClassName="active">
                                                <a className="nav-link">Home</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/info/greet">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    회사소개 <i className="flaticon-down-arrow"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/info/greet" activeClassName="active">
                                                        <a className="nav-link">인사말</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/info/basic" activeClassName="active">
                                                        <a className="nav-link">기본정보</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/info/history" activeClassName="active">
                                                        <a className="nav-link">회사연혁</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/info/organization" activeClassName="active">
                                                        <a className="nav-link">조직도</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/info/map" activeClassName="active">
                                                        <a className="nav-link">찾아오는길</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>



                                        <li className="nav-item">
                                            <Link href="/business">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    사업영역 <i className="flaticon-down-arrow"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/business/1" activeClassName="active">
                                                        <a className="nav-link">조경식재공사</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/business/2" activeClassName="active">
                                                        <a className="nav-link">조경시설물설치공사</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/business/3" activeClassName="active">
                                                        <a className="nav-link">{`조경설계(정원설계)`}</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/business/4" activeClassName="active">
                                                        <a className="nav-link">{`벽면녹화(수직정원)`}</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/business/5" activeClassName="active">
                                                        <a className="nav-link">정원시공</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/business/6" activeClassName="active">
                                                        <a className="nav-link">수목납품</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/article/all">
                                                <a className="nav-link" onClick={e => e.preventDefault()}>
                                                    사업실적 <i className="flaticon-down-arrow"></i>
                                                </a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/article/all" activeClassName="active">
                                                        <a className="nav-link">전체실적</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/article/construction" activeClassName="active">
                                                        <a className="nav-link">시공 · 관리</a>
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link href="/article/plan" activeClassName="active">
                                                        <a className="nav-link">계획 · 설계</a>
                                                    </Link>
                                                </li>
                                                
                                            </ul>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/article/tree" activeClassName="active">
                                                <a className="nav-link">나무병원</a>
                                            </Link>
                                        </li>

                                    </ul>

                                    {/* <div className="others-option">
                                        <div className="call-us">
                                            <div className="icon">
                                                <i className="flaticon-call"></i>
                                            </div>
                                            Call Us:
                                            <span className="number">+1 518 285679</span>
                                        </div>
                                    </div> */}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;