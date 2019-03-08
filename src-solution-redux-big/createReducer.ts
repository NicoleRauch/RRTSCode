import {Action} from "redux";

export function createReducer<ST>(initialState: ST, handlers: {}) {
    return (state = initialState, action: Action = {type: "dummy"}) =>
        handlers.hasOwnProperty(action.type) ?
            handlers[action.type](state, action) :
            state
}