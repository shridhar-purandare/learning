import React from "react";
import ReactDOM from "react-dom";
import Body from "HellowWorldApp/Body";

import "./index.css";

const App = () => (
  <div className="container">
    <h3> App Header </h3>
    <Body />
    <h5> App Footer </h5>

  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
