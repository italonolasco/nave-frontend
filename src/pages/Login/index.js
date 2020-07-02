import React from "react";
import { Form, Input } from "@rocketseat/unform";

import logo from "../../assets/logo.svg";

import { Container, Content } from "./styles";

function Login() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Nave" />

        <Form>
          <h1>Login</h1>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
