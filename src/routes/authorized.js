import React from "react";
import { Switch } from "react-router-dom";

import PrivateRoute from "../components/PrivateRoute";

import Home from "../pages/Home";
import AddNaver from "../pages/AddNaver";
import EditNaver from "../pages/EditNaver";

function AuthorizedRoutes() {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/add" component={AddNaver} />
      <PrivateRoute path="/edit" component={EditNaver} />
    </Switch>
  );
}

export default AuthorizedRoutes;
