import React from "react";
import "./education.css";
import data from "../../content/data.json";
import { ThemeContext } from '../context';

const Education = () => {
    const [context] = React.useContext(ThemeContext);

    return <div className={`block-wrapper block-wrapper1-color-darkMode_${context}`} id="edu-section">
        <h3 className={`darkMode_${context}`}>Education</h3>
        {
            data.education.map(academic => <div className={`block-content block-color-darkMode_${context}`}>
                <div>
                    <h5 className="degree-name">{academic.degree}</h5>
                    <span className={`timespan sub-heading-color-darkMode_${context}`}>{academic.timespan}</span>
                    <div className={`timespan sub-heading-color-darkMode_${context}`}>{academic.percentage}</div>
                    <h6 className={`darkMode_${context} collage-name sub-heading-color`} >{academic.institution}</h6>
                </div>
            </div>
            )
        }
    </div>
}

export default Education;