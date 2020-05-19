import React from "react";
import {MyContext} from "./context";
import Button from "./button";
import ButtonClass from "./buttonClass";

const TestComponentContext = () => {
  return (
    <div>
      <MyContext.Consumer>
        {value => <Button color={value}/>}
      </MyContext.Consumer>
      <br/>
      <ButtonClass/>
    </div>
  );
};

export default TestComponentContext;
