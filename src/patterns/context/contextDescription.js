import React, {Component} from 'react';
import {MyContext} from "./context";
import TestComponentContext from "./testComponentContext";

class ContextDescription extends Component {
  state = {
    theme: 'gray'
  };

  render() {
    return (
      <div>
        <h2>Context</h2>
        <p>
          Контекст разработан для передачи данных, которые можно назвать «глобальными»<br/>
          можно исопльзовать как с классовыми, так и с функциональными компонентами<br/>
          может содержать MyContext.displayName = 'name';<br/>
          можно исопльзовать несколько контекстов и они могут переопределяться из вложенного компонента<br/>
        </p>
        Пример:
        <MyContext.Provider value={this.state.theme}>
          <TestComponentContext/>
        </MyContext.Provider>
      </div>
    );
  }
}

export default ContextDescription;