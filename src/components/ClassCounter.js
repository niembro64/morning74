import React, { Component } from "react";

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increaseCounter = () => {
        // console.log("increase");

        this.setState ({
            counter: this.state.counter + 1
        })
    }

    render() {
        const {text} = this.props
        return (
            <div className="border border-dark w-25">
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.increaseCounter} className="btn btn-primary btn-lg">click me!</button>
                <p>
                    <em>this is class component</em>
                </p>
                <h3>{text}</h3>
            </div>
        );
    }
}

export default ClassCounter;
