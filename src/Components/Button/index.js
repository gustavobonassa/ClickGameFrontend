import React from 'react';
import './styles.css';

class Button extends React.Component {
  render() {
    return (
      <div className="buttonPrincipal" onClick={this.props.onClick}>
        <span className="button--bubble__container">
          <button className="button button--bubble">
            {this.props.children}
          </button>
          <span className="button--bubble__effect-container">
            <span className="circle top-left"></span>
            <span className="circle top-left"></span>
            <span className="circle top-left"></span>

            <span className="button effect-button"></span>

            <span className="circle bottom-right"></span>
            <span className="circle bottom-right"></span>
            <span className="circle bottom-right"></span>
          </span>
        </span>
      </div>
    );
  }
}

export default Button;
