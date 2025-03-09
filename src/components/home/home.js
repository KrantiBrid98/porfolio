import React from 'react';
import './home.css';
import { ToggleButton } from '../toggleButton';
import { ThemeContext } from '../context';

const Home = () => {
  const [selected, setSelected] = React.useState(true);
  const [context, setContext] = React.useContext(ThemeContext); // used hooks instead of Context.Consumer

  return <div className={`filler-darkMode_${context}`}>
    <ToggleButton
      selected={selected}
      toggleSelected={() => {
        setSelected(!selected);
        setContext(!selected);
      }}
    />
    <div className={`home-content-darkMode_${context}`} id="home-section">
      <div className="home-script">
        Hello, I am{' '} <br/>
        <span style={{ color: `#e31b6d`, fontWeight: `bold` }}>
          Kranti Brid
          </span>
          .
        </div>
      <div className="home-script">I am a<br/> Full-Stack <br/>developer</div>
      <button className={`darkMode_${context}`}>
        <a className={`darkMode_${context}`} href="#skills-section">
          View my Work <span className="arrow">➡</span>
        </a>
      </button>
    </div>
  </div>
};

export default Home;
