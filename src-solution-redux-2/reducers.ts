import {Action} from "redux";
import {StoreState} from "./types";


const INITIAL_STATE: StoreState = {
  users: [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
  ]
};

export default (
    state: StoreState = INITIAL_STATE,
    _: Action = {type: "Dummy"}
    ): StoreState => {
  return state;
}
