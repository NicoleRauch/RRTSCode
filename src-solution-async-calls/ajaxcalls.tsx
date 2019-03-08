import ajax from "nanoajax";
import {UserType} from "../src-solution-redux-big/types";

export function postUser(user: UserType, callback: (returnCode: number) => void) {
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

export function fetchUsers(callback: (response: UserType[]) => void) {
  ajax.ajax({
      url: "/api/users",
      method: "GET"
    },
    (_, response) => {
        callback(JSON.parse(response));
    }
  );
}
