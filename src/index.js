import React from "react";
import ReactDOM from "react-dom";
import GrandParent from "./Components/family";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        <GrandParent />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
