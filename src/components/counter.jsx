import React, { Component } from 'react';
class Counter extends Component {
    state = {
        count: 0,
        imageUrl : "https://picsum.photos/200"
    };

    render() {         
        return (
            <div>
                <img src={this.state.imageUrl} alt=""/>
                <span>{this.formatCount()}</span>
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