import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionAsProp from "./patterns/functionAsProp/functionAsProp";
import RenderFunction from "./patterns/renderFunction/renderFunction";

class App extends Component {

  getTestData = () => {
    return 'test text'
  };

  renderFunction = (text) => {
    return (
      <b>{text}</b>
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Patterns</h1>
          <FunctionAsProp getData={this.getTestData}/>
          <RenderFunction renderItem={this.renderFunction}/>
        </header>
      </div>
    );
  }
}

export default App;
