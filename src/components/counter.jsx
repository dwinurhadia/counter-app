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
        let classes = this.getBadgeClasses();

        return (
            <div>
                <span style = {this.style} className={classes}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button> 
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}
 
export default Counter;