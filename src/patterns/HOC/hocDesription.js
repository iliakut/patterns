import React from "react";
import TestComponent from "./testComponent";
import withData from "./withData";

const HocDescription = () => {

  const getData = () => {
    return 'test data for HOC'
  };

  const TestComponentWithData = withData(TestComponent, getData);

  return (
    <div>
      <h2>HOC</h2>
      <p>
        Создает функцию обертку для компонента,<br/>
        которая возвращает новый компонент функцию (или класс)<br/>
        с каким-либо дополнительным функционалом<br/>
        компонент все также может принимать пропсы<br/>
        ref не передаются
      </p>
      Пример:
      <TestComponentWithData someProp={'test prop'}/>
    </div>
  );
};

export default HocDescription;
