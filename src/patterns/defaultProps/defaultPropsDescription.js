import React from "react";
import DefaultPropsFunction from "./defaultPropsFunction";
import DefaultPropsClass from "./defaultPropsClass";

const DefaultPropsDescription = () => {
  return (
    <div>
      <h2>Default Props</h2>
      <p>
        Контекст разработан для передачи данных, которые можно назвать «глобальными»<br/>
      </p>
      Пример:
      <DefaultPropsFunction/>
      <DefaultPropsClass/>
    </div>
  );
};

export default DefaultPropsDescription;
