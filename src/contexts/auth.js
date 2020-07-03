import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user_id, setUser_id] = useState(null);

  useEffect(() => {
    const storagedUser_id = localStorage.getItem("@Auth:user_id");
    const storagedToken = localStorage.getItem("@Auth:token");

    if (storagedToken && storagedUser_id) {
      setUser_id(storagedUser_id);
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function signIn(data) {
    const response = await api.post("/users/login", data);

    const { token, id: user_id } = response.data;

    setUser_id(user_id);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    localStorage.setItem("@Auth:user_id", user_id);
    localStorage.setItem("@Auth:token", token);
  }

  function signOut() {
    localStorage.clear();
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

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
