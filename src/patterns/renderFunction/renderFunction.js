import React from "react";

const RenderFunction = ({renderItem}) => {
  const item = renderItem('renderFunction test');
  return (
    <div>
      <h2>Render Function</h2>
      <p>
        Функция рендер с каким-либо jsx контентом
      </p>
      Пример: {item}
    </div>
  );
};

export default RenderFunction;
