import React, {ReactElement} from "react";
import {useReducer} from "./useReducer";

type TodoType = string;
type TodosType = string[];
type Action = {type: "add", text: TodoType};

const todosReducer = (state: TodosType, action: Action): TodosType =>
  state.concat(action.text);

export const Todos = (): ReactElement => {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const handleAddClick = (text: TodoType) => {
    dispatch({type: 'add', text});
  }
  return <div>
    <div>{todos.join(", ")}</div>
    <input onBlur={e => handleAddClick(e.target.value)}/>
  </div>;
}
