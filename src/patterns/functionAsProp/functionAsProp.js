import React from "react";

const FunctionAsProp = ({getData}) => {
  const data = getData();
  return (
    <div>
      <h2>Function as a prop</h2>
      <p>
        Функция как пропс позволяет сделать более универсальный компонент для получения данных или отрисовки
      </p>
      {data}
    </div>
  );
};

export default FunctionAsProp;
