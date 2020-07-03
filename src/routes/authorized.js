import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home";

function AuthorizedRoutes() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  );
}

export default AuthorizedRoutes;
