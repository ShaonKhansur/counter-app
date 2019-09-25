import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0
     }

     handleIncrease = () => {
        const {count} = this.state;
        this.setState({count: count + 1});
    };
    render() {
        return ( 
            <div>
                <label>{this.state.count}</label>
                <button 
                    className="btn btn-primary"
                    onClick={this.handleIncrease}
                    >
                    Increase
                </button>
            </div>
            );
    }
}
 
export default Counter;