import IncrementDecrement from "./IncrementDecrement";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    IncrementDecrement : IncrementDecrement
})

export default rootReducer;