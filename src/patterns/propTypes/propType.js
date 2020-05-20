import React, {Component} from 'react';
import PropTypes from 'prop-types'

class PropType extends Component {
  static propTypes = {
    testProp: PropTypes.string, // тип
    testPropRequired: PropTypes.number.isRequired, // тип и обязательный
    testPropFunction: PropTypes.func, // функция
    testPropArray: PropTypes.arrayOf(PropTypes.number) // массив чисел
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
или так для функций
PropType.propTypes = {
  testProp: PropTypes.string
};
*/

export default PropType;