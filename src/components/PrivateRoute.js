import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuth } from "../contexts/auth";

import AuthLayout from "../pages/layouts/auth/index";

function PrivateRoute({ component: Component, ...props }) {
  const { signed } = useAuth();

  return (
    <Route
      {...props}
      render={(props) =>
        signed ? (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
}

export default PrivateRoute;
