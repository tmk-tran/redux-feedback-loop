import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import logger from "redux-logger";

const feelingReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_FEELING":
            return action.payload;
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        //add reducers here
        feelingReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
