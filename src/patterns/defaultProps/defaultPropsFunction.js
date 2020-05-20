import React from "react";

const DefaultPropsFunction = ({testProp}) => {
  return (
    <div>{testProp}</div>
  );
};

DefaultPropsFunction.defaultProps = {
  testProp: 'testProp default'
};

export default DefaultPropsFunction;
