import { combineReducers } from "redux";
import Counter from "./counter";
import Movies from "./movies";

export default function(reduxifiedServices, initialState) {
  console.log("initialState", initialState);
  return combineReducers({
    counter: Counter,
    movies: Movies
  });
}
