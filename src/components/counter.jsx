import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3", "tag4"]
  };

  handleIncrease = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  handleDecrease = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  countFormatter = () => {
    return this.state.count === 0 ? "Zero" : this.state.count;
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClases()}>{this.countFormatter()}</span>
        <button className="btn btn-primary m-2" onClick={this.handleIncrease}>
          +
        </button>
        <button
          disabled={this.state.count === 0 ? true : false}
          className="btn btn-primary"
          onClick={this.handleDecrease}
        >
          -
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClases() {
    let clases = "badge m-2 badge-";
    this.state.count === 0 ? (clases += "warning") : (clases += "secondary");
    return clases;
  }
}

export default Counter;
