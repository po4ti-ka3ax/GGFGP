import { applyMiddleware, createStore } from "redux";
import { cardsReducer } from "./cardsReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createSagaMiddleware from "@redux-saga/core";
// import { cardsWatcher } from "../asyncActions/cardsSaga";

// const sagaMiddleware = createSagaMiddleware()

export const store = createStore(cardsReducer, composeWithDevTools(applyMiddleware(thunk)))

// sagaMiddleware.run(cardsWatcher)