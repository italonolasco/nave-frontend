import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuth } from "../contexts/auth";

function PrivateRoute({ component: Component, ...props }) {
  const { signed } = useAuth();

  return (
    <Route
      {...props}
      render={() => (signed ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}

export default PrivateRoute;
