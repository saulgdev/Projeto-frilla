import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { loginSchema } from "../../validations/LoginSchema";
import { ParagrafoErro } from "../../components/ParagraphyError";
import { UserContext } from "../../contexts/UserContext";

import {
  BlockLogo,
  DivForm,
  LinkStyled,
  LoginStyled,
  SectionForm,
} from "./styles";
import { Button } from "@chakra-ui/react";

export interface iLoginFormData {
  email: string;
  password: string;
}

export const Login = () => {
  const { userLogin, passwordOn, setPasswordOn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <LoginStyled>
      <DivForm>
        <BlockLogo></BlockLogo>
        <SectionForm>
          <form onSubmit={handleSubmit(userLogin)}>
            <h1>Login</h1>
            <label>E-mail</label>
            <div>
              <input
                required
                type="email"
                placeholder="Digite seu E-mail"
                {...register("email")}
              />
            </div>

            <ParagrafoErro>
              {errors.email && errors.email?.message}
            </ParagrafoErro>
            <label>Senha</label>
            <div>
              <input
                required
                type={passwordOn}
                placeholder="Digite sua senha"
                {...register("password")}
              />

              <span>
                {passwordOn === "password" ? (
                  <ViewIcon onClick={() => setPasswordOn("text")} />
                ) : (
                  <ViewOffIcon onClick={() => setPasswordOn("password")} />
                )}
              </span>
            </div>

            <ParagrafoErro>
              {errors.password && errors.password?.message}
            </ParagrafoErro>
            <LinkStyled to="/register">
              Ainda não possui cadastro? <span></span>
            </LinkStyled>
            <Button type="submit">Entrar</Button>
          </form>
        </SectionForm>
      </DivForm>
    </LoginStyled>
  );
};
