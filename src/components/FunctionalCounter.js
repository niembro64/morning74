import React, {useState} from "react";

const FunctionCounter = (props) => {
    const {text} = props;
    const [state, setState] = useState(0);

    const increaseCounter = () => {
        console.log("increase functional");
        setState(state+1);
    }

    return (
        <div className="border border-dark w-25">
            <h1>Count: {state}</h1>
            <button onClick={increaseCounter} className="btn btn-primary btn-lg">click me!</button>
            <p>
                <em>this is functional component</em>
            </p>
            <h3>{text}</h3>
        </div>
    );
};

export default FunctionCounter;