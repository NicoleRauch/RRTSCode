import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from "redux";
import logger from "redux-logger";

import reducer from "../src-solution-redux-4/reducers";
import App from "../src-solution-redux-4/App";

const store = createStore(reducer,
  compose(
    applyMiddleware(
      logger
      // more middlewares go here if required
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("start")
);

