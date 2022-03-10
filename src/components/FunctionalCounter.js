import React from "react";

const FunctionCounter = (props) => {
    const {text} = props

    return (
        <div className="border border-dark w-25">
            <h1>count</h1>
            <button className="btn btn-primary btn-lg">click me!</button>
            <p>
                <em>this is functional component</em>
            </p>
            <h3>{text}</h3>
        </div>
    );
};

export default FunctionCounter;