import {UserType} from "../src-solution-react/types";


export interface StoreState {
    users: UserType[]
}

const INITIAL_STATE = {
  users: [
    {firstName: "Nicole", lastName: "Rauch"},
    {firstName: "Peter", lastName: "Müller"},
    {firstName: "Fritz", lastName: "Walter"}
  ]
};

export default function (state:StoreState = INITIAL_STATE, _ = {}):StoreState {
  return state;
}
