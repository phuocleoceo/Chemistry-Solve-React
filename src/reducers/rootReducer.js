import { combineReducers } from "redux";
import format1Reducer from "./format1Reducer";
import format2Reducer from "./format2Reducer";
import format3Reducer from "./format3Reducer";
import format4Reducer from "./format4Reducer";
import format5Reducer from "./format5Reducer";
import format6Reducer from "./format6Reducer";
import format7Reducer from "./format7Reducer";

const rootReducer = combineReducers({
  format1: format1Reducer,
  format2: format2Reducer,
  format3: format3Reducer,
  format4: format4Reducer,
  format5: format5Reducer,
  format6: format6Reducer,
  format7: format7Reducer
});

export default rootReducer;
