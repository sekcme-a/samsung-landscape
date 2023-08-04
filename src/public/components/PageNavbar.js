import React, { Component } from 'react';
import Link from 'src/utils/ActiveLink';
import { NavbarList } from 'src/public/data/navbar';

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
                                        <img src="/logo-black.png" alt="logo" />
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
                                        {NavbarList.map((mainItem, index) => {
                                            if(mainItem.child){
                                                return(
                                                    <li className="nav-item" key={index}>
                                                        <Link href={mainItem.url}>
                                                            <a className="nav-link" onClick={e => e.preventDefault()}>
                                                                {mainItem.text} <i className="flaticon-down-arrow"></i>
                                                            </a>
                                                        </Link>
                                                        <ul className="dropdown-menu">
                                                        {
                                                            mainItem.child.map((subItem, subIndex) => {
                                                                if(subItem.child){
                                                                    return(
                                                                        <li className="nav-item" key={subIndex}>
                                                                            <Link href={subItem.url}>
                                                                                <a className="nav-link" onClick={e => e.preventDefault()}>{subItem.text}</a>
                                                                            </Link>
                                                                            <ul className="dropdown-menu">
                                                                                {
                                                                                    subItem.child.map((subSubItem, subSubIndex)=>(
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
                                                                } else{
                                                                    return(
                                                                        <li className="nav-item" key={subIndex}>
                                                                            <Link href={subItem.url}activeClassName="active">
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
                                                return(
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
                                            Call Us:
                                            <span className="number">+1 518 285679</span>
                                        </div>
                                    </div>
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