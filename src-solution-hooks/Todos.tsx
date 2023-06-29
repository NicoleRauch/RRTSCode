import React, {ReactElement} from "react";
import {useReducer} from "./useReducer";

type TodoType = string;

type Action = {type: "add", text: TodoType};

const todosReducer = (state: TodoType[], action: Action): TodoType[] =>
  state.concat(action.text);

export const Todos = (): ReactElement => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const handleBlur = (text: TodoType) => {
    dispatch({type: 'add', text});
  }
  return <div>
    <div>{todos.join(", ")}</div>
    <input onBlur={e => handleBlur(e.target.value)}/>
  </div>;
}
