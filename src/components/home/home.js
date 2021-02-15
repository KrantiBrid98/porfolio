import React from 'react';
import './home.css';
import { ToggleButton } from '../toggleButton';
const Home = () => {
  const [selected, setSelected] = React.useState(true);
  return (
    <div className="filler">
      <ToggleButton
        selected={selected}
        toggleSelected={() => {
          setSelected(!selected);
        }}
      />
      <div className="home-content" id="home-section">
        <div className="home-script">
          Hello, I am{' '}
          <span style={{ color: `#e31b6d`, fontWeight: `bold` }}>
            Kranti Brid
          </span>
          .
        </div>
        <div className="home-script">I am a front-end developer</div>
        <button>
          <a href="#skills-section">
            View my Work <span className="arrow">➡</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;
