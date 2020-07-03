import React from "react";

import { useAuth } from "../../contexts/auth";

import { Container } from "./styles";

function Home() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <button type="submit" onClick={handleSignOut}>
        Sair
      </button>
    </Container>
  );
}

export default Home;
