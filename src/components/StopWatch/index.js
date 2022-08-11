import React, { Component } from "react";
import styles from "./StopWatch.module.scss";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
    };
    this.timerId = null;
  }
  tick = () => {
    // const { time } = this.state;
    // const newTime = new Date(time.getTime()+1000)
    // this.setState({ time: newTime });
    this.setState((state) => {
      const { time } = state;
      const newTime = new Date(time.getTime() + 1000);
      return { time: newTime };
    });
  };
  start = () => {
    // this.stop();
    if (this.timerId === null) {
      this.timerId = setTimeout(this.tick, 1000);
    }
  };
  stop = () => {
    clearTimeout(this.timerId);
    this.timerId = null;
  };
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  };
  componentDidUpdate() {
    if (this.timerId !== null) {
      this.timerId = null;
      this.start();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    const { time } = this.state;
    console.log("render");
    return (
      <article className={styles.container}>
        <h2 className={styles.heading}>{time.toLocaleTimeString("en-GB")}</h2>
        <div>
          <button onClick={this.start}>start</button>
          <button onClick={this.stop}>stop</button>
          <button onClick={this.reset}>reset</button>
        </div>
      </article>
    );
  }
}

export default StopWatch;
