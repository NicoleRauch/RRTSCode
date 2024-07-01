import React from "react";

import {Provider} from "react-redux";
import {createRoot} from "react-dom/client";
import logger from "redux-logger";

import reducer from "./reducers";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(logger),
  devTools: true
});

const start: HTMLElement | null = document.getElementById("start");
if (start !== null) {
    createRoot(start).render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}
