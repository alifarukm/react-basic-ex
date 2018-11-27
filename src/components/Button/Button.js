import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
  // This function refresh page
  reset = () => {
    window.location.reload(); 
  };

  render () {
    return (
      <div className="Button">
        <button className="btnReset" onClick={this.reset}>
          <span>Reset Tree!</span>
        </button>
      </div>
    );
  }
}

export default Button;
