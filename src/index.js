// react 17.0.2
// https://dev.to/ifeanyichima/how-to-downgrade-from-react-18-to-1702-818
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
