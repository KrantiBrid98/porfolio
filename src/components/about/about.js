import React from "react";
import "./about.css";
import display from "../../assets/display.jpg";
import data from "../../content/data.json";

const About = () => {
    console.log(data.about.skillset)
    return <div className="block-wrapper block-wrapper-color" id="about-section">
        <h3>About</h3>
        <div className="about-column">
            <div className="row">
                <img src={`${display}`} alt="Paris" width="302" height="375" />
                <div className="user-description">{data.about.description}</div>
            </div>
            <div className="row">
                <h6>Skills</h6>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {
                        data.about.skillset.map((skill, index) => {
                            return <div className="tags" key={index}>{skill}</div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}

export default About;