import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { sharedReducer } from "./shared.reducer";
import { weatherReducer } from "./weather.reducer";

const reducers = combineReducers({
    shared: sharedReducer,
    weather: weatherReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
