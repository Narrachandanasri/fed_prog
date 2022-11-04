import React, { Component } from "react";
export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: " "
    };
  }
  componentDidMount() {
    this.tick();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.time !== this.state.time) {
      this.id = setInterval(() => {
        this.tick();
      }, 1000);
    }
  }
  tick = () => {
    const d = new Date();
    const hrs = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    const newtime = `${hrs}:${min}:${sec}`;
    this.setState({ time: newtime });
  };
  render() {
    return (
      <>
        <p>{this.state.time}</p>
      </>
    );
  }
}
