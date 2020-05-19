import React, {Component} from 'react';
import {MyContext} from './context'
class ButtonClass extends Component {
  static contextType = MyContext; // так
  render() {
    let color = this.context;
    return (
      <button style={{backgroundColor: color}}>Class button component</button>
    );
  }
}

// ButtonClass.contextType = MyContext; или так
export default ButtonClass;