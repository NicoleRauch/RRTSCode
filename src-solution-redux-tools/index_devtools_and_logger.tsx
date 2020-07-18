import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from "redux";
import logger from "redux-logger";

import reducer from "../src-solution-redux-4/reducers";
import App from "../src-solution-redux-4/App";


const enhancedCompose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose; // eslint-disable-line @typescript-eslint/dot-notation 

const store = createStore(reducer,
    enhancedCompose(
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
