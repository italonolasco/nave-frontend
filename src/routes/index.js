import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "../routes/PrivateRoute";

import Login from "../pages/Login";
import Home from "../pages/Home";

import AuthorizedRoutes from "./authorized";
import UnauthorizedRoutes from "./unauthorized";

import { useAuth } from "../contexts/auth";

/*function Routes() {
  const { signed } = useAuth();

  return (
    <Switch>
      <Route path="/" component={Login} exact />
      <PrivateRoute path="/home" component={Home} />
    </Switch>
  );
}*/

function Routes() {
  const { signed } = useAuth();

  return signed ? <AuthorizedRoutes /> : <UnauthorizedRoutes />;
}

export default Routes;
