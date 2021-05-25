import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { bookReducer } from "./Reducre/Reducer";

const combinedReducers = combineReducers({
    books: bookReducer,
})
export const store = createStore(combinedReducers, composeWithDevTools())