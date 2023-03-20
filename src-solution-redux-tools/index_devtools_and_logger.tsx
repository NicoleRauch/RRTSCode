import React from "react";

import {Provider} from "react-redux";
import logger from "redux-logger";
import {createRoot} from "react-dom/client";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import reducer from "../src-solution-redux-2/reducers";
import App from "../src-solution-redux-2/App";

export const store = configureStore({
    reducer,
    middleware: [thunkMiddleware, logger],
    devTools: true,
});

const start: HTMLElement | null = document.getElementById("start");
if (start !== null) {
    const root = createRoot(start);
    root.render(
        <Provider store={store}>
            <App/>
        </Provider>
    );
}
