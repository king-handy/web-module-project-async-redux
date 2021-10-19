import { combineReducers, createStore } from "redux";
import { sharedReducer } from "./shared.reducer";
import { weatherReducer } from "./weather.reducer";

const reducers = combineReducers({
    shared: sharedReducer,
    weather: weatherReducer
});

export const store = createStore(reducers);
