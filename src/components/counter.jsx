import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
    };

    render() {         
        return (
            <div>
                <span>Hello World</span>
                <button>Increment</button> 
                </div>
        );
    }
}
 
export default Counter;