import { combineReducers } from "redux";
import reducer from "./todoReducer";

const RootReducer = combineReducers({
  todos: reducer,
});

export default RootReducer;
