import React from "react";
import DefaultPropsFunction from "./defaultPropsFunction";
import DefaultPropsClass from "./defaultPropsClass";

const DefaultPropsDescription = () => {
  return (
    <div>
      <h2>Default Props</h2>
      <p>
        Можно устанавливать дефолтные значнеия пропсов static defaultProps = ... или ComponentName.defaultProps<br/>
      </p>
      Пример:
      <DefaultPropsFunction/>
      <DefaultPropsClass/>
    </div>
  );
};

export default DefaultPropsDescription;
