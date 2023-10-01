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
        case "RESET":
            return [];
        default:
            return state;
    }
}

const understandingReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_UNDERSTANDING":
            return action.payload;
        case "RESET":
            return [];
        default:
            return state;
    }
}

const supportReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_SUPPORT":
            return action.payload;
        case "RESET":
            return [];
        default:
            return state;
    }
}

const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_COMMENTS":
            return action.payload;
        case "RESET":
            return [];
        default:
            return state;
    }
}

const reviewReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_REVIEW":
            return action.payload;
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        //add reducers here
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer,
        reviewReducer
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
