import React from "react";
const TestComponent = ({someProp, data}) => {
  return (
    <div>
      <b>{someProp}<br/>
      {data}
      </b>
    </div>
  );
};

export default TestComponent;
