import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";
import { StoreContext } from "./StoreProvider";
import { makeStore } from "./store";
import "./styles.css";

const store = makeStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StoreContext value={store}>
    <Counter />
  </StoreContext>,
  rootElement
);
