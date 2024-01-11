import { combineReducers } from "redux";
import inputReducer from "./inputReducer";
import breakReducer from "./breakReducer";

const rootReducer=combineReducers(
    {
    inputReducer:inputReducer,
    breakReducer:breakReducer

}
)


   export default rootReducer;