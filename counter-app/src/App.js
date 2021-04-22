import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
  render() {
    console.log("APP", this.props);
    return (
      <div className="App">
        <h1>
          Счетчик <strong>{this.props.counter}</strong>
        </h1>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить +1</button>
          <button onClick={this.props.onSub}>Вычесть -1</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

const addCounter = {
  type: "ADD",
};
const subCounter = {
  type: "SUB",
};

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(addCounter),
    onSub: () => dispatch(subCounter),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
