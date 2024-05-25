import { BrowserRouter } from "react-router-dom";

import { GroupRouters } from "./routes";

export function Routes() {
  return (
    <BrowserRouter>
      <GroupRouters />
    </BrowserRouter>
  );
}
