import React from "react";
import { Switch } from "react-router-dom";

import PrivateRoute from "../components/PrivateRoute";

import Header from "../components/Header";
import Home from "../pages/Home";
import AddNaver from "../pages/AddNaver";

function AuthorizedRoutes() {
  return (
    <Switch>
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/add" component={AddNaver} />
    </Switch>
  );
}

export default AuthorizedRoutes;
