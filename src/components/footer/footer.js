/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import medium from "../../assets/medium.png"
import blogspot from "../../assets/blogspot.png"
import linkedin from "../../assets/linkind.svg"
import github from "../../assets/github.svg"
import "./footer.css";

const Footer = () => {
    return <div className="block-wrapper" style={{ backgroundColor: "#1b242f" }} >
        <div className="social-media-wrapper">
            <a href="https://www.linkedin.com/in/kranti-brid-2b1585102/" target="_blank" rel="noopener" className="socail-media">
                <img src={`${linkedin}`} alt="linkind" style={{ height: "50%" }} />
            </a>
            <div className="socail-media">
                <img src={`${github}`} alt="github" style={{ height: "50%" }} />
            </div>
            <a href="https://krantibrid.medium.com/" target="_blank" rel="noopener" className="socail-media">
                <img src={`${medium}`} alt="medium" style={{ height: "50%" }} />
            </a>
            <a href="https://krantibrid.blogspot.com/" target="_blank" rel="noopener" className="socail-media">
                <img src={`${blogspot}`} alt="blogspot" style={{ height: "70%" }} />
            </a>
        </div>
        <div className="email">Made by Kranti Brid using <span role="img" aria-label="sparle react">⚛️✨</span></div>
    </div>
}

export default Footer;
