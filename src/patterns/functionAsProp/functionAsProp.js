import React from "react";

const FunctionAsProp = ({getData}) => {
  const data = getData();
  return (
    <div>
      <h2>Function as a prop</h2>
      <p>
        Функция как пропс позволяет сделать более универсальный компонент<br/>
        для получения данных или отрисовки
      </p>
      Пример: {data}
    </div>
  );
};

export default FunctionAsProp;
