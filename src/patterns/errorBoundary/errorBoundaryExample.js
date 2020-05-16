import React from "react";

const ErrorBoundaryExample = ({isHasError}) => {
  return (
    <div>
      {
        isHasError
        ? isHasError.test.test
        : 'нет ошибки'
      }
    </div>
  );
};

export default ErrorBoundaryExample;
