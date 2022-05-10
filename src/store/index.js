import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {WeatherReducer} from "./reducers/WeatherReducer.js";

const rootReducer = combineReducers({
    weather: WeatherReducer
});
 
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); //Dev
// export const store = createStore(rootReducer); //prod