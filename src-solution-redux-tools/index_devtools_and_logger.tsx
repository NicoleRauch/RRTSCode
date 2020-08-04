import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from "redux";
import logger from "redux-logger";

import reducer from "../src-solution-redux-2/reducers";
import App from "../src-solution-redux-2/App";

declare const window: {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose
}

const enhancedCompose: typeof compose =
    (process.env.NODE_ENV === "development" ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : undefined) // eslint-disable-line @typescript-eslint/dot-notation
    || compose;

const store = createStore(reducer,
    enhancedCompose(
        applyMiddleware(
            logger
            // more middlewares go here if required
        )));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("start")
);
