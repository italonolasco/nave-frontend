import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

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
    try {
      const response = await api.post("/users/login", data);

      const { token, id: user_id } = response.data;

      setUser_id(user_id);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      localStorage.setItem("@Auth:user_id", user_id);
      localStorage.setItem("@Auth:token", token);
    } catch (err) {
      toast.error("Usuário ou Senha incorretos");
    }
  }

  function signOut() {
    localStorage.clear();
    setUser_id(null);
  }

  async function addNaver(data) {
    try {
      data.birthdate = data.birthdate.replace(/-/g, "/");
      data.admission_date = data.admission_date.replace(/-/g, "/");
      api.post("/navers", data);
    } catch (err) {
      toast.error("Não foi possível cadastrar o Naver");
    }
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user_id, user_id, signIn, signOut, addNaver }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
