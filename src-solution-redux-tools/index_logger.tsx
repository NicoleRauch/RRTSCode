import React from "react";
import ReactDOM from "react-dom";

import reducers from "../src-solution-redux-4/reducers";
import App from "../src-solution-redux-4/App";

import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from "redux";
import logger from "redux-logger";

const store = createStore(reducers,
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

