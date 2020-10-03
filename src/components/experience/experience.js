import React from "react";
import "./experience.css";

import data from "../../content/data.json";

const Experience = () => {
    return <div className="block-wrapper" id="exp-section">
        <h3>Work Experience</h3>
        {
            data.experience.map(expData => <div className="block-content block-color">
                <h5 className="company-name">{expData.companyName}</h5>
                <span className="timespan sub-heading-color">{expData.timespan}</span>
                <ul>
                    {
                        expData.skills.map(skill => <li className="sub-heading-color">{skill}</li>)

                    }
                </ul>
            </div>
            )
        }
    </div>
}

export default Experience