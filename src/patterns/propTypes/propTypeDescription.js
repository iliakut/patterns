import React from "react";
import PropType from "./propType";
import PropTypes from "prop-types";

const PropTypeDescription = () => {
  return (
    <div>
      <h2>PropTypes</h2>
      <p>
        Типы пропсов (сторонняя библиотека)<br/>
        Синтаксис: PropTypes.number.isRequired или смотри компонент<br/>
      </p>
      Пример:
      <PropType testProp={123}/>
    </div>
  );
};

export default PropTypeDescription;
