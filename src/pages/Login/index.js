import React, { useContext } from "react";
import { Form } from "@unform/web";
import Input from "../../components/Input";

import AuthContext from "../../contexts/auth";

import logo from "../../assets/logo.svg";

import { Container, Content } from "./styles";

function Login() {
  const { signIn } = useContext(AuthContext);

  function handleSubmit(data) {
    signIn(data);
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Nave" />

        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <Input type="text" name="email" id="email" placeholder="E-mail" />
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />

          <button type="submit">Entrar</button>
        </Form>
      </Content>
    </Container>
  );
}

export default Login;
