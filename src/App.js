import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionAsProp from "./patterns/functionAsProp/functionAsProp";

class App extends Component {

  getTestData = () => {
    return 'test text'
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Patterns</h1>
          <FunctionAsProp getData={this.getTestData}/>
        </header>
      </div>
    );
  }
}

export default App;
