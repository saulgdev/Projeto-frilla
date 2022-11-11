import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { iLoginFormData } from "./../pages/Login/index";
import { iRegisterFormData } from "./../pages/Register/index";
import { api } from "../services/api";
import { LoadContext } from "./LoadContext";

export const UserContext = createContext({} as iUserContext);
export interface iUserContext {
  user: iUser | null;
  userLogin: (data: iLoginFormData) => void;
  userRegister: (data: iRegisterFormData) => void;
  userLogout: () => void;
  passwordOn: string;
  setPasswordOn: React.Dispatch<React.SetStateAction<string>>;
  tel: string;
  setTel: React.Dispatch<React.SetStateAction<string>>;
}

export interface iUser {
  id: number;
  name: string;
  type: string;
}
export interface iPropsContext {
  children: React.ReactNode;
}
export interface iApiError {
  message: string;
}

export const UserProvider = ({ children }: iPropsContext) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [passwordOn, setPasswordOn] = useState("password");
  const [tel, setTel] = useState("");

  const { setLoad } = useContext(LoadContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("@token");
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        try {
          const response = await api.get(
            `users/${localStorage.getItem("@id")}`
          );
          setUser(response.data);
        } catch (error) {
          userLogout();
        }
      }
      setLoad(false);
    };
    getUser();
  }, []);

  const userLogin = async (data: iLoginFormData) => {
    setLoad(true);
    try {
      const response = await api.post("login", data);
      localStorage.setItem("@token", response.data.accessToken);
      localStorage.setItem("@id", response.data.user.id);
      api.defaults.headers.authorization = `Bearer ${response.data.accessToken}`;
      setUser(response.data.user);
      const toNavigate = location.state?.from?.pathname || "/";
      navigate(toNavigate, { replace: true });
    } catch {
      toast.error("E-mail ou senha incorreto!");
    } finally {
      setLoad(false);
    }
  };

  const userRegister = async (data: iRegisterFormData) => {
    const regData = {
      checkPassword: data.checkPassword,
      email: data.email,
      name: data.name,
      password: data.password,
      type: tel,
    };
    setLoad(true);
    try {
      await api.post("register", regData);
      toast.success("conta criada com sucesso!");
      navigate("/login");
    } catch (error: any) {
      error?.response?.data
        ? toast.error(error?.response?.data)
        : toast.error(
            "Não foi possivel criar sua conta, por favor tente novamente mais tarde!"
          );
    } finally {
      setLoad(false);
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userLogout,
        userRegister,
        passwordOn,
        setPasswordOn,
        tel,
        setTel,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
