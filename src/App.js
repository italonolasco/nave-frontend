import React from "react";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./contexts/auth";

import Routes from "./routes/";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
