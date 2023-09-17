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
            <img src={logo} alt='logo' className="logoimg"></img>
            <button onClick={toggleNav} className="toggle-button">
                ☰
            </button>
            <ul className="nav-links" ref={myElementRef}>
                <li><a href="#section1">Free Trial </a></li>
                <li><a href="#section2">Gmat Prep</a></li>
                <li><a href="#section3">About Us</a></li>
                <li><a href="#section4">Testimonials</a></li>
                <li><button className="subscribe-btn"><a href="#section5">Subscribe</a></button></li>
            </ul>
        </div>
    );
}

export default Header;
