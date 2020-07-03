import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "./contexts/auth";

import Routes from "./routes/";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
