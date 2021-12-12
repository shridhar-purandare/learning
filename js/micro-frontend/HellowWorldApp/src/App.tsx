import React from "react";
import ReactDOM from "react-dom";
import Body from "./Body";

import "./index.css";

const App = () => (
  <div className="container">
    <Body />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
