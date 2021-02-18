import React from "react";
import "./experience.css";
import { ThemeContext } from '../context';

import data from "../../content/data.json";

const Experience = () => {
    const [context, ] = React.useContext(ThemeContext);
    console.log(context)
    return <div  className={`block-wrapper block-wrapper2-color-darkMode_${context}`} id="exp-section">
        <h3 className={`darkMode_${context}`}>Work Experience</h3>
        {
            data.experience.map(expData => <div className={`block-content block-color-darkMode_${context}`}>
                <h5 className="company-name">{expData.companyName}</h5>
                <span className={`timespan sub-heading-color-darkMode_${context}`}>{expData.timespan}</span>
                <ul>
                    {
                        expData.skills.map(skill => <li className={`sub-heading-color-darkMode_${context}`}>{skill}</li>)

                    }
                </ul>
            </div>
            )
        }
    </div>
}

export default Experience