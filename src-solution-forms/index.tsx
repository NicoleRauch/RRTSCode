import React from "react";
import {createRoot} from "react-dom/client";

import UserCreation from "./UserCreationWithFormSubmit";
import UserCreationControlled from "./UserCreationControlledComponent";

const start: HTMLElement | null = document.getElementById("start");
if (start !== null) {
    const root = createRoot(start);
    root.render(
        <div>
            <UserCreation/>
            <UserCreationControlled submitUser={(/* d */): void => { /* console.log(d) */
            }}/>
        </div>
    );
}
