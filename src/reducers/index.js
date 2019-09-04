import { combineReducers } from "redux";
import Counter from "./counter";

export default function(reduxifiedServices, initialState) {
  console.log("initialState", initialState);
  return combineReducers({
    counter: Counter
  });
}
