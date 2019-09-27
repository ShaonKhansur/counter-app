import React, { Component } from "react";

class Counter extends Component {
  countFormatter = () => {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClases()}>{this.countFormatter()}</span>
        <button
          className="btn btn-primary m-2"
          onClick={() => this.props.onIncrease(this.props.counter)}
        >
          +
        </button>
        <button
          disabled={this.props.counter.value === 0 ? true : false}
          className="btn m-2 btn-primary"
          onClick={() => this.props.onDecrease(this.props.counter)}
        >
          -
        </button>
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          X
        </button>
      </div>
    );
  }

  getBadgeClases() {
    let clases = "badge m-2 badge-";
    this.props.counter.value === 0
      ? (clases += "warning")
      : (clases += "secondary");
    return clases;
  }
}

export default Counter;
