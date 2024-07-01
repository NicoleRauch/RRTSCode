import {Action} from "redux";


export
const createReducer = <ST, A extends string =string>(
    initialState: ST,
    handlers: Record<string, (state:ST, action:Action<A>) => ST>
  ) =>
  (state: ST = initialState, action: Action<A>): ST =>
    handlers.hasOwnProperty(action.type) ?
      handlers[action.type](state, action) : state;
