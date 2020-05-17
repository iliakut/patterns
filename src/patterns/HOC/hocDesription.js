import React from "react";
import TestComponentWrapper from './testComponentWrapped'

const HocDescription = () => {

  return (
    <div>
      <TestComponentWrapper someProp={'test prop'}/>
    </div>
  );
};

export default HocDescription;
