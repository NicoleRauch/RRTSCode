import ajax from "nanoajax";

export function postUser(user, callback) {
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

export function fetchUsers(callback) {
  ajax.ajax({
      url: "/api/users",
      method: "GET"
    },
    (code, response) => {
      callback(JSON.parse(response));
    }
  );
}
