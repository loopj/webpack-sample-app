import React, { Component } from 'react';
import './styles.css';
import Button from 'components/button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-controls">
          <Button title="Click me"/>
        </div>
      </div>
    );
  }
}

export default App;
