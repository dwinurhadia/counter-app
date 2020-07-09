import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0
    };

    render() {         
        return (
            <div>
                <span className="badge badge-primary m-2">{this.formatCount()}</span>
                <button>Increment</button> 
                </div>
        );
    }
    formatCount(){
        const { count } = this.state;
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;