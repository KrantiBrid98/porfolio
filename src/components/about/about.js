import React from 'react';
import './about.css';
import { ThemeContext } from '../context';

const About = () => {
  const [context] = React.useContext(ThemeContext);
  return (
    <div className={`block-wrapper block-wrapper1-color-darkMode_${context}`} id="about-section">
      <h3 className={`darkMode_${context}`}>About</h3>
      <div style={{width: `80%`}}  className={`block-content block-color-darkMode_${context}`}>
        <p className={`darkMode_${context}`}>
          I am a tech enthusiast and a <b className={`darkMode_${context}`} >software developer</b> by profession.
          I love to create
          <b className={`darkMode_${context}`}> dynamic, user-friendly and maintainable applications </b> that
          makes user`s lives easier.
        </p>
        <p className={`darkMode_${context}`}>
          I am a FullStack developer with
          <b className={`darkMode_${context}`} > 
             6+ yrs of extensive experience in Javascript and 5+ yrs of
            experience in React
          </b>
           and sound knowledge of <b className={`darkMode_${context}`} >nodeJs, expressJs and much more</b>.
          I have a good exposure to the <b className={`darkMode_${context}`} >e-learning & Pharma domain</b> as well.
        </p>
        <p className={`darkMode_${context}`}>
          <b className={`darkMode_${context}`} >I have many interests besides coding.</b> I like to{' '}
          <b className={`darkMode_${context}`} >write articles about tech stuff </b>that I learn and which I find
          worth sharing with other on <a className='lin' href='https://krantibrid.medium.com/' target="_blank" rel="noopener" >medium</a>.
          <p  className={`darkMode_${context}`}>Apart from that, I love canvas painting and growing vegetables at home. Both have taught me the value of patience and the satisfaction that comes from seeing something thrive through dedication.</p>
        </p>
      </div>
    </div>
  );
};

export default About;
