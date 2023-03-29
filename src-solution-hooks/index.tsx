import React from "react";
import {createRoot} from "react-dom/client";

import {Todos} from "./Todos";

const start: HTMLElement | null = document.getElementById("start");
if (start !== null) {
    const root = createRoot(start);
    root.render(<Todos />);
}

