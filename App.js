import React, { Component } from "react";
import * as math from "mathjs";
import "./App.css";
import { createStore } from "redux";
import Button from "./Components/Button";
import Input from "./Components/Input";
import ClearButton from "./Components/ClearButton";

const counter = (state = { value: null }, action) => {
  switch (action.type) {
    case "INPUT":
      return { value: state.value + action.payload.input };
    case "EQUAL":
      return { value: math.evaluate(state.value) };
    default:
      return state;
  }
};

class App extends Component {
  state = createStore(counter);

  dispatch(action) {
    this.setState((prevState) => counter(prevState, action));
  }

  addToInput = (val) => {
    this.dispatch({
      type: "INPUT",
      payload: {
        input: val,
      },
    });
  };

  handleEqual = () => {
    this.dispatch({ type: "EQUAL" });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.value}></Input>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ value: "" })}>
              Clear
            </ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
