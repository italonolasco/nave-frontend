import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../pages/Login";

function UnauthorizedRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  );
}

export default UnauthorizedRoutes;
