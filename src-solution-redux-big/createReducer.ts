import {Action} from "redux";

export interface ActionT extends Action {
  type: string
}

export
const createReducer = <ST>(initialState: ST, handlers: Record<string, (state:ST, action:ActionT) => ST>): ((initialState: ST, action: ActionT)=>ST) => 
  (state = initialState, action: ActionT): ST =>
    handlers.hasOwnProperty(action.type) ?
      handlers[action.type](state, action) : state
