import React, { Component } from 'react';
import './toggleButton.css';

export class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selected, toggleSelected } = this.props;
    return (
      <div
        className={`toggle-container nightMode-${selected}`}
        onClick={toggleSelected}
      >
        <div
          className={`dialog-button ${selected ? '' : 'disabled'}`}
          style={{ height: '80%' }}
        >
          {selected ? '🌑' : '⛅'}
        </div>
      </div>
    );
  }
}
