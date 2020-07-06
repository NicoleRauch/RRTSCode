import {Action} from "redux";

export
const createReducer = <ST>(initialState: ST, handlers: {}): ((initialState: ST, action: Action)=>ST) => {
  return (state = initialState, action: Action = {type: "X"}):ST =>
    handlers.hasOwnProperty(action.type) ?
      handlers[action.type](state, action) : state
}
