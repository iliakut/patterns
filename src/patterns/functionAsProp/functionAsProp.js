import React from "react";

const FunctionAsProp = ({getData}) => {
  const data = getData();
  return (
    <div>
      <h2>Function as a prop</h2>
      <p>
        Функция как пропс позволяет сделать более универсальный компонент
      </p>
      {data}
    </div>
  );
};

export default FunctionAsProp;
