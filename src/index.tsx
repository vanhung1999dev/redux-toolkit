import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from './App/redux';

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);