import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import cartReducer from "./cartReducer";

const rootReducers = combineReducers({ todoReducer, cartReducer });

export default rootReducers;
