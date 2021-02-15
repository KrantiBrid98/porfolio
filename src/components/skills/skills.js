import React from 'react';
import './skills.scss';
import display from '../../assets/display.jpg';
import data from '../../content/data.json';
import { ThemeContext } from '../context';

const Skills = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div className="block-wrapper block-wrapper-color" id="skills-section">
          <h3>Skills</h3>
          <div className="skills-column">
            <div className="row">
              <img src={`${display}`} alt="Paris" width="302" height="375" />
              <div className="user-description">{data.skills.description}</div>
            </div>
            <div className="row">
              <h6>Skills</h6>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {data.skills.skillset.map((skill, index) => {
                  return (
                    <div className="tags" key={index}>
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Skills;
