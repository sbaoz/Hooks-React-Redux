import { Action, createStore } from "redux";
import reducer from "../reducer";

export function makeStore() {
  return createStore(reducer, {
    count: 0
  });
}
