import React, {useState} from "react";

const FunctionCounter = (props) => {
    const {text} = props;
    const [counter, setCounter] = useState(0);
    const [hover, setHover] = useState(false);

    const increaseCounter = () => {
        console.log("increase functional");
        setCounter(counter+1);
    }

    const onHover = () =>  {
        console.log("hovering functional")

        setHover(!hover);
    }

    const hoverStyle = {
        backgroundColor: "black",
        color: "white"
    }

    return (
        <div style={hover ? hoverStyle : {}}onMouseEnter={onHover} onMouseLeave={onHover} className="border border-dark w-25">
            <h1>Count: {counter}</h1>
            <button onClick={increaseCounter} className="btn btn-primary btn-lg">click me!</button>
            <p>
                <em>this is functional component</em>
            </p>
            <h3>{text}</h3>
        </div>
    );
};

export default FunctionCounter;