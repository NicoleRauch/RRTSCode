import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import React, {ReactElement} from "react";

import UserList from "./UserList";
import UserCreation from "../src-solution-tanstack-query/UserCreation";

const queryClient = new QueryClient();

const App = (): ReactElement =>
  <QueryClientProvider client={queryClient}>
    <div>
      <UserList />
      <UserCreation />
    </div>
  </QueryClientProvider>;

export default App;
