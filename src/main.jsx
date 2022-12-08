import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const create = React.createElement;
ReactDOM.createRoot(document.getElementById("root")).render(
  create(React.StrictMode, null, create(App))
);
