import React from 'react';
import appleSvg from '../../assets/apple.svg';
import Apple from '../../assets/apple.svg';
import './Apple.css';

const apple = props => {
  return (
    <div className="Apple" style={props.style}>
        <Apple></Apple>
    </div>
  );
};

export default apple;
