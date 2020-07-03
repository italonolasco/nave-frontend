import React, { createContext, useState } from "react";
import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user_id, setUser_id] = useState(null);

  async function signIn(data) {
    const response = await api.post("/users/login", data);

    const { token, id: user_id } = response.data;

    setUser_id(user_id);
  }

  function signOut() {
    setUser_id(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user_id, user_id, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
