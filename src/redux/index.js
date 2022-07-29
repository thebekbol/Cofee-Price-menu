
import {createStore, applyMiddleware} from "redux";
import{composeWithDevTools} from "redux-devtools-extension";
import {Reducer} from "./Reducer";
import thunk from "redux-thunk";


export const store =createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)))