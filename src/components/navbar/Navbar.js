import React, { Component } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { BiSearch, BiCart } from "react-icons/bi"
import { BsGlobe } from "react-icons/bs"
import icon from "../../images/logo-udemy.svg"

export default class Navbar extends Component {
    state = {
        navbarOpen: false,
    }

    handleToggle = () => {
        this.setState( prevState => ({
            navbarOpen: !prevState.navbarOpen,
        }))
    }
    handleClose = () => {
        this.setState(prevState => ({
            navbarOpen: !prevState.navbarOpen,
        }))
    }

    render() {
        return(
            <>
            <nav className="nav">
                <div className="menuIcon">
                    <GiHamburgerMenu  className="i"
                    onClick={this.handleToggle}
                    />
                    <div className={`innerMenu ${this.state.navbarOpen ? "showMenu" : ""}`}
                    >
                        <div className="container">
                        <GiHamburgerMenu className="closeIcon"
                        onClick={this.handleClose}
                        />
                        <div className="items">
                        <button>Login</button>
                        <button>Register</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="logo">
                    <img src={icon} alt="" />
                </div>
                <div className="search">
                    <BiSearch
                    className="i"
                     />
                </div>
                <div className="cart">
                    <BiCart
                    className="i"
                     />
                </div>
                <div className="desktop">
                    <div className="inner">
                        <p>Categories</p>
                        <div className="searchBox">
                        <input type="text" placeholder="Search for anything" />
                        <BiSearch className="sd" />
                        </div>
                        <p>udemy Business</p>
                        <p>teach on udemy</p>
                        <BiCart className="cd" />
                        <div className="buttons">
                        <button>Log in</button>
                        <button>Sign up</button>
                        <button><BsGlobe className="g"/></button>
                        </div>
                    </div>
                </div>
            </nav>
            </>
        );
    }
} 