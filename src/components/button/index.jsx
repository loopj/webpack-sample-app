import React, { Component } from 'react';
import './styles.css';

class Button extends Component {
  render() {
    return (
      <div className="Button" onClick={this.handleClick}>
        {this.props.title}
      </div>
    );
  }

  handleClick(e) {
    throw new Error("oopsie");
  }
}

export default Button;
