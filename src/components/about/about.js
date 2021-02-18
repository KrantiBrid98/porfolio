import React from 'react';
import './about.css';
import { ThemeContext } from '../context';

const About = () => {
  const [context] = React.useContext(ThemeContext);
  return (
    <div className={`block-wrapper block-wrapper1-color-darkMode_${context}`} id="about-section">
      <h3 className={`darkMode_${context}`}>About</h3>
      <div style={{width: `80%`}}  className={`block-content block-color-darkMode_${context}`}>
        <p>
          I am a tech enthusiast and a <b>software developer</b> by profession.
          I love to create
          <b> dynamic, user-friendly and maintainable applications </b> that
          makes user`s lives easier.
        </p>
        <p>
          I am a FullStack developer with
          <b> 
             ~3 yrs of extensive experience in Javascript and 2+ yrs of
            experience in React
          </b>
           and sound knowledge of <b>nodeJs, expressJs, nestJs and much more</b>.
          I have a good exposure to the <b>e-learning domain</b> as well.
        </p>
        <p>
          <b>I have many interests besides coding.</b> I like to{' '}
          <b>write articles about tech stuff </b>that I learn and which I find
          worth sharing with other on <a className='lin' href='https://krantibrid.medium.com/' target="_blank" rel="noopener" >medium</a>. Also
          recently as a hobby, <b>I started a youtube channel</b> where I try to
          explain javascript concepts <a className='lin' href='https://www.youtube.com/channel/UCIYK9YPSWWjB5f-N4PN7z0g' target="_blank" rel="noopener" >(Girl who codes).
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
