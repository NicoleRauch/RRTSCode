import {useState} from "react";

export const useReducer =
  <S, A>(reducer: (s: S, a: A) => S, initialState: S):
    [S, (_:A) => void] => {
  const [state, setState] = useState<S>(initialState);

  const dispatch = (action: A): void => {
    const nextState = reducer(state, action);
    setState(nextState);
  }
  return [state, dispatch];
}
