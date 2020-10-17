import React from "react";
import "./header.css";

const Header = () => {
    return <>
    <button className="hamburger">|||</button>
    <nav className="header-wrapper">
        <ul>
            <li className="flex-item"><a href="#home-section">HOME</a></li>
            <li className="flex-item"><a href="#about-section">ABOUT</a></li>
            <li className="flex-item"><a href="#exp-section">EXPERIENCE</a></li>
            <li className="flex-item"><a href="#edu-section">EDUCATION</a></li>
            <li className="flex-item"><a href="#proj-section">PROJECTS</a></li>
            <li className="flex-item"><a href="#cont-section">CONTACT</a></li>
        </ul>
    </nav>
    </>
}

export default Header;