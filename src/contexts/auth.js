import React, { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
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
      console.log(data);
      await api.post("/navers", data);

      return true;
    } catch (err) {
      toast.error("Não foi possível cadastrar o Naver");
      return false;
    }
  }

  async function editNaver(data, id) {
    try {
      data.birthdate = data.birthdate.replace(/-/g, "/");
      data.admission_date = data.admission_date.replace(/-/g, "/");
      console.log(data, id);
      await api.put(`/navers/${id}`, data);

      return true;
    } catch (err) {
      toast.error("Não foi possível editar o Naver");
      return false;
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user_id,
        user_id,
        signIn,
        signOut,
        addNaver,
        editNaver,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
