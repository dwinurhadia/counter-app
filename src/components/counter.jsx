import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0
    };
    
    style = {
        fontSize : 10,
        fontWeight : "bold"
    };

    render() {         
        return (
            <div>
                <span style = {this.style} className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button> 
            </div>
        );
    }
    formatCount(){
        const { count } = this.state;
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;