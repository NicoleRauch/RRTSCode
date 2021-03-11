import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

import reducer from "./reducers";
import App from "./App";


const store = createStore(reducer,
    applyMiddleware(
      thunkMiddleware,
      logger
    )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("start")
);

