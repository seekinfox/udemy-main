import React from "react";
import logo from "../../images/logo-udemy.svg"
import { BsGlobe } from "react-icons/bs"
const Footer = () => {
    const links = ["about us", "Contact us", "Careers", "Blog", "Help and Support",  "Affiliate", "Investors", "Terms","Privacy policy","Cookie settings", "Accesibility statement"
    ];

    return (
        <>
        <footer className="footer">
        <button><BsGlobe className="g"/>English</button>
        <div className="links">
        {links.map(items => <a href="#">{items}</a>)}
        </div>
        <div className="bottom">
            <img src={logo} alt="link" />
            <p>© 2021 Udemy, Inc.</p>
        </div>
        </footer>
        </>
    )
}
export default Footer