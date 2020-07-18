import {Action} from "redux";


export
const createReducer = <ST>(
    initialState: ST,
    handlers: Record<string, (state:ST, action:Action) => ST>
  ) =>
  (state: ST = initialState, action: Action): ST =>
    handlers.hasOwnProperty(action.type) ?
      handlers[action.type](state, action) : state;
