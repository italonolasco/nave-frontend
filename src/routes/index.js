import React from "react";

import AuthorizedRoutes from "./authorized";
import UnauthorizedRoutes from "./unauthorized";

import { useAuth } from "../contexts/auth";

function Routes() {
  const { signed } = useAuth();

  return signed ? <AuthorizedRoutes /> : <UnauthorizedRoutes />;
}

export default Routes;
