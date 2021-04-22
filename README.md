# Redux-course
Краткий курс по созданию приложения React/Redux 

### `npm i react-redux`

react-redux связывает React с Redux

Обернем приложение App с помощью ```Provider```

index.js
```js
    import React from "react";
    import ReactDOM from "react-dom";
    import { createStore } from "redux";
    import { Provider } from "react-redux";
    import rootReducer from "./redux/rootReducer";
    import App from "./App";

    const store = createStore(rootReducer);
    const app = (<Provider store={store}> <App/> </Provider>);

    ReactDOM.render(app, document.getElementById("root"));
```

Создадим  Reducer и добавим State
rootReducer.js
```js
    // Store
    const initialState = { counter: 10 };

    // Reducer
    export default function rootReducer(state = initialState, action) {
        switch (action.type) {
            case "ADD": return { counter: state.counter + 1 };
            case "SUB": return { counter: state.counter - 1 };
            default: return state;
        }
    }
```
В APP добавим Action, Dispatch

App.js
```js
import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>
        <div>
          <button onClick={this.props.onAdd}>Добавить +1</button>
          <button onClick={this.props.onSub}>Вычесть -1</button>
        </div>
      </div>
    );
  }
}

// Action
const addCounter = { type: "ADD" };
const subCounter = { type: "SUB" };

function mapStateToProps(state) {
  return { counter: state.counter };
}
// Dispatch 
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(addCounter),
    onSub: () => dispatch(subCounter),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
```