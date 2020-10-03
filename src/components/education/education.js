import React from "react";
import "./education.css";
import data from "../../content/data.json";

const Education = () => {
    return <div className="block-wrapper block-wrapper-color" id="edu-section">
        <h3>Education</h3>
        {
            data.education.map(academic => <div className="block-content block-color">
                <div>
                    <h5 className="degree-name">{academic.degree}</h5>
                    <span className="timespan sub-heading-color">{academic.timespan}</span>
                    <div className="timespan sub-heading-color">{academic.percentage}</div>
                    <h6 className="collage-name sub-heading-color">{academic.institution}</h6>
                </div>
            </div>
            )
        }
    </div>
}

export default Education;