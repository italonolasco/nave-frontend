import React from "react";

import Header from "../../../components/Header";

import { Wrapper } from "./styles";

function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

export default AuthLayout;
