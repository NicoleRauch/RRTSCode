import {useMutation, useQueryClient} from "@tanstack/react-query";
import React, {useState} from "react";

import {postUser} from "./backendCalls";

const UserCreation = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: postUser,
    onSuccess: _ => queryClient.invalidateQueries({queryKey: ["users"]})
  });

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  return <div><div>
      <label>First name:</label>
      <input type="text" data-testid="firstname"
             onBlur={(e): void => setFirstName(e.target.value)}/>
    </div>
    <div>
      <label>Last name:</label>
      <input type="text" data-testid="lastname" onBlur={(e): void => setLastName(e.target.value)}/>
    </div>
    <div>
      <button
        onClick={(): void => {
          mutation.mutate({firstName, lastName});
        }}>Submit
      </button>
    </div>
  </div>;
};

export default UserCreation;
