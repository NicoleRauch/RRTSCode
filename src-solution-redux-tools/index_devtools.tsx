import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore, compose} from "redux";

import reducers from "../src-solution-redux-4/reducers";
import App from "../src-solution-redux-4/App";


const enhancedCompose = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose; // eslint-disable-line @typescript-eslint/dot-notation 

const store = createStore(reducers,
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
