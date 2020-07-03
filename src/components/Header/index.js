import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/auth";

import logo from "../../assets/logo.svg";

import { Container, Content } from "./styles";

export default function Header() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Nave" />
          </Link>
        </nav>

        <aside>
          <button type="logout" onClick={handleSignOut}>
            Sair
          </button>
        </aside>
      </Content>
    </Container>
  );
}
