import React, {Component} from 'react';

class DefaultPropsClass extends Component {
  static defaultProps = {
    testProp: 'testProp in class default value'
  };

  render() {
    return (
      <div>
        {this.props.testProp}
      </div>
    );
  }
}
/*
или так
DefaultPropsClass.defaultProps = {
  testProp: 'testProp in class default value'
};
*/

export default DefaultPropsClass;