import {configureStore} from "@reduxjs/toolkit";
import React from "react";
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import logger from "redux-logger";

import App from "../src-solution-redux-1/App";

import reducer from "./reducers";

export const store = configureStore({
    reducer,
    middleware: (gDM) => gDM().concat(logger),
    devTools: true,
});

const start: HTMLElement | null = document.getElementById("start");
if (start !== null) {
    createRoot(start).render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}
