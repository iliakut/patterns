import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionAsProp from "./patterns/functionAsProp/functionAsProp";
import RenderFunction from "./patterns/renderFunction/renderFunction";
import Children from "./patterns/children/children";
import ErrorBoundary from "./patterns/errorBoundary/errorBoundary";
import ErrorBoundaryExample from "./patterns/errorBoundary/errorBoundaryExample";
import ErrorBoundaryDescription from "./patterns/errorBoundary/errorBoundaryDescription";
import HocDesription from "./patterns/HOC/hocDesription";
import ContextDescription from "./patterns/context/contextDescription";
import DefaultPropsDescription from "./patterns/defaultProps/defaultPropsDescription";

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

          <Children>
            {(item) => (<b>{item}</b>)}
          </Children>

          <ErrorBoundaryDescription>
            <ErrorBoundary>
              <ErrorBoundaryExample/>
            </ErrorBoundary>
            <ErrorBoundary>
              <ErrorBoundaryExample isHasError={true}/>
            </ErrorBoundary>
          </ErrorBoundaryDescription>

          <HocDesription/>

          <ContextDescription/>

          <DefaultPropsDescription/>
        </header>
      </div>
    );
  }
}

export default App;
