// functional

// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClassCounter from "./components/ClassCounter";
import FunctionCounter from "./components/FunctionalCounter";

function App() {
    return (
        <div className="App">
            <ClassCounter text="hey class"/>
            <FunctionCounter text="hey function"/>
        </div>
    );
}

export default App;
