import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore, compose} from "redux";

import reducer from "../src-solution-redux-2/reducers";
import App from "../src-solution-redux-2/App";


const enhancedCompose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose; // eslint-disable-line @typescript-eslint/dot-notation 

const store = createStore(reducer,
  enhancedCompose(
    // applyMiddleware goes here if required
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("start")
);
