import React, { useRef } from "react";
import logo from '../../assets/logo.png'
import "./header.css";
import CountdownTimer from "../CountdownTimer/countdownTimer-component";
import Gmat from "../gmat/gmat.component";
import Home from "../home/home.component";
import About from "../about/about.component";
import Testimonials from "../testimonials/testimonials.component";

const menuItems = [
    {
        value:'Home',
        path: '/',
        component: Home
    },
    {
        value: 'Free Trial',
        path:'/free-trial',
        component: CountdownTimer
    }, 
    {
        value: 'GMAT Prep',
        path: '/gmat',
        component: Gmat
    }, 
    {
        value: 'About Us',
        path:'/about',
        component: About
    }, 
    {
        value: 'Testimonials',
        about:'/testimonials',
        component: Testimonials
    }
]

// Define a functional component
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
                    {menuItems.map((item) => (
                        <li>
                            {item.value}
                        </li>
                    ))}
                    <li><button className="subscribe-btn">Subscribe</button></li>
                </ul>
        </div>
    );
}

export default Header;
