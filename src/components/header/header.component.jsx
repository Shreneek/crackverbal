import React, { useRef } from "react";
import logo from '../../assets/logo.png'
import "./header.css";

const Header = () => {
    const myElementRef = useRef(null);

    const toggleNav = () => {
        const element = myElementRef.current;

        // Check if the element exists
        if (element && element.style.display === 'block') {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    };

    return (
        <div className="navbar">
            <a href="#root"><img src={logo} alt='logo' className="logoimg"></img></a>
            <button onClick={toggleNav} className="toggle-button">
                ☰
            </button>
            <ul className="nav-links" ref={myElementRef}>
                <li><a href="#section1" onClick={toggleNav}>Free Trial </a></li>
                <li><a href="#section2" onClick={toggleNav}>Gmat Prep</a></li>
                <li><a href="#section3" onClick={toggleNav}>About Us</a></li>
                <li><a href="#section4" onClick={toggleNav}>Testimonials</a></li>
                <li><button className="subscribe-btn" onClick={toggleNav}><a href="#section5">Subscribe</a></button></li>
            </ul>
        </div>
    );
}

export default Header;
