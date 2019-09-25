import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleIncrease = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };

  handleDecrease = () => {
    const { value } = this.state;
    this.setState({ value: value - 1 });
  };

  countFormatter = () => {
    return this.state.value === 0 ? "Zero" : this.state.value;
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClases()}>{this.countFormatter()}</span>
        <button className="btn btn-primary m-2" onClick={this.handleIncrease}>
          +
        </button>
        <button
          disabled={this.state.value === 0 ? true : false}
          className="btn btn-primary"
          onClick={this.handleDecrease}
        >
          -
        </button>
      </div>
    );
  }

  getBadgeClases() {
    let clases = "badge m-2 badge-";
    this.state.value === 0 ? (clases += "warning") : (clases += "secondary");
    return clases;
  }
}

export default Counter;
