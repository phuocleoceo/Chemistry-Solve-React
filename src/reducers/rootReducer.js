import { combineReducers } from "redux";
import format1Reducer from "./format1Reducer";

const rootReducer = combineReducers({
    format1: format1Reducer,
});

export default rootReducer;