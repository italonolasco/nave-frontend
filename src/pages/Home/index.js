import React, { useContext } from "react";

import AuthContext from "../../contexts/auth";

import { Container } from "./styles";

function Home() {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <h1>Oi</h1>
    </Container>
  );
}

export default Home;
