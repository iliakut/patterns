import React from "react";

const Children = (props) => {
  return (
    <div>
      <h2>Children</h2>
      <p>
        Через props.children (или this.props.children для класса) мы можем получить доступ<br/>
        к контенту котой был передан внутрь компонента (как слот во Vue)<br/>
        props.children - может быть функцией или любым другим типом данных
        в React есть набор методов для работы с children - React.Children
      </p>
      Пример: {props.children('children test')}
    </div>
  );
};

export default Children;
