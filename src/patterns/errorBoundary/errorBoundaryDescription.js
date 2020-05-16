import React from "react";

const ErrorBoundaryDescription = (props) => {
  return (
    <div>
      <h2>Error boundary</h2>
      <p>
        Это компонент обертка, который рендерит свои this.prop.children<br/>
        И имеет хук static getDerivedStateFromError (может вместе с componentDidCatch)<br/>
        записывает ошибку и в случае ошибки рендерит компонент-заглушку
      </p>
      Пример:
      {props.children}
    </div>
  );
};

export default ErrorBoundaryDescription;
