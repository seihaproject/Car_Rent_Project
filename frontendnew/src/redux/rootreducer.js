import carReducer from "./reducers/carReducers";
import alertsReducer from "./reducers/alertsReducer";
import {combineReducers } from "redux";
const rootReducer = combineReducers({
    carReducer, alertsReducer
})
export default rootReducer