import ajax from "nanoajax";
import {IUser} from "../src-solution-redux-big/types";

export function postUser(user: IUser, callback: (returnCode: number) => void) {
  ajax.ajax({
      url: "/api/user",
      method: "POST",
      body: "firstName=" + user.firstName + "&lastName=" + user.lastName
    },
    (code) => {
      callback(code);
    }
  );
}

export function fetchUsers(callback: (response: IUser[]) => void) {
  ajax.ajax({
      url: "/api/users",
      method: "GET"
    },
    (_, response) => {
        callback(JSON.parse(response));
    }
  );
}
