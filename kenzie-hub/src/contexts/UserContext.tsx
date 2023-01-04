import { createContext, useEffect, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  iDataLogin,
  iDataRegister,
  iResponseLogin,
  iResponseRegister,
  iTechs,
  iUser,
  iUserProps,
  UserProviderData,
} from "./typesUserContext";

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: iUserProps) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [techs, setTechs] = useState<iTechs[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          const { data } = await api.get<iResponseLogin>("/profile");

          setUser(data);
          setTechs(data.techs);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [techs]);

  const onSubmitLogin = async (dataLogin: iDataLogin) => {
    try {
      const { data } = await api.post<iResponseLogin>("/sessions", dataLogin);

      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", data.token);
      window.localStorage.setItem("@USERID", data.user.id);

      if (data.token) {
        toast.success("Login realizado com sucesso!");
      }

      setUser(data.user);

      navigate("/dashboard", { replace: true });

      return data;
    } catch (error) {
      toast.error("Email e/ou Senha invalidos");
      console.error(error);
    }
  };
  const onSubmitRegister = async (dataRegister: iDataRegister) => {
    try {
      const { data } = await api.post<iResponseRegister>(
        "https://kenziehub.herokuapp.com/users",
        dataRegister
      );
      toast.success("Cadastro realizado com sucesso!");

      navigate("/");

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        onSubmitLogin,
        onSubmitRegister,
        user,
        setUser,
        loading,
        modal,
        setModal,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
