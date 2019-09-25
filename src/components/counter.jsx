import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0
     }

    handleIncrease = () => {
        const {count} = this.state;
        this.setState({count: count + 1});
    };

    handleDecrease = () => {
        const {count} = this.state;
        this.setState({count: count - 1});
    }

    badgeFormatter = () => {
        let badge = "badge m-2 badge-"
        return (this.state.count === 0) ? badge+= 'warning' : badge+= 'secondary';
    }
    render() {
        return ( 
            <div>
                <lable className={this.badgeFormatter()}>{this.state.count}</lable>
                <button 
                    className="btn btn-primary m-2"
                    onClick={this.handleIncrease}
                    >
                    +
                </button>
                <button 
                    disabled={(this.state.count === 0) ? true : false}
                    className="btn btn-primary"
                    onClick={this.handleDecrease}
                    >
                    -
                </button>
            </div>
            );
    }
}
 
export default Counter;