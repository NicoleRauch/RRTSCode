import React from "react";
import ReactDOM from "react-dom";

import reducers from "./reducers";
import App from "./App";

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";

const store = createStore(reducers,
    applyMiddleware(
      thunkMiddleware
    )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("start")
);

