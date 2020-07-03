import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import AuthContext from "../contexts/auth";

function PrivateRoute({ component: Component, ...props }) {
  const { signed } = useContext(AuthContext);

  return (
    <Route
      {...props}
      render={() => (signed ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}

export default PrivateRoute;
