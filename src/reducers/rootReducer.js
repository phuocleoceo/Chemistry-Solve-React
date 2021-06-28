import { combineReducers } from "redux";
import format1Reducer from "./format1Reducer";
import format2Reducer from "./format2Reducer";

const rootReducer = combineReducers({
  format1: format1Reducer,
  format2: format2Reducer,
});

export default rootReducer;
