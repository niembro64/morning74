import React, { Component } from "react";

class ClassCounter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {text} = this.props
        return (
            <div className="border border-dark w-25">
                <h1>count</h1>
                <button className="btn btn-primary btn-lg">click me!</button>
                <p>
                    <em>this is class component</em>
                </p>
                <h3>{text}</h3>
            </div>
        );
    }
}

export default ClassCounter;
