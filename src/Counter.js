import React, { Component } from "react";
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cnt: 0
    };
  }
  inc = () => {
    this.setState({ cnt: this.state.cnt + 1 });
  };
  dec = () => {
    this.setState({ cnt: this.state.cnt - 1 });
  };
  render() {
    return (
      <>
        <button onClick={this.inc}>inc</button>
        <button onClick={this.dec}>dec</button>
        <h1>count:{this.state.cnt}</h1>
      </>
    );
  }
}
