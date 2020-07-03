import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts/auth";

import { Container } from "./styles";

function Home() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Link to="/add">
        <button type="submit">Adicionar</button>
      </Link>

      <button type="submit" onClick={handleSignOut}>
        Sair
      </button>
    </Container>
  );
}

export default Home;
