import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../routes/PrivateRoute";

import Login from "../pages/Login";
import Home from "../pages/Home";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <PrivateRoute path="/home" component={Home} />
    </Switch>
  );
}

export default Routes;
