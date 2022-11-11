import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-phone-input-2/lib/style.css";

import { registerSchema } from "../../validations/RegisterSchema";
import { ParagrafoErro } from "../../components/ParagraphyError";
import { UserContext } from "../../contexts/UserContext";

import {
  Terms,
  SectionForm,
  RegisterStyled,
  BlockLogo,
  DivForm,
  PhoneInputStyled,
} from "./styles";
import { LinkStyled } from "./../../components/StyledLink/styled";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Button } from "../../components/buttons";

export interface iRegisterFormData {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
  type: string;
}

export const Register = () => {
  const { userRegister, passwordOn, setPasswordOn, setTel } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <RegisterStyled>
      <DivForm>
        <BlockLogo></BlockLogo>
        <SectionForm>
          <form onSubmit={handleSubmit(userRegister)}>
            <h1>Cadastro</h1>
            <label>Nome</label>
            <div>
              <input
                required
                type="name"
                placeholder="Digite seu nome"
                {...register("name")}
              />
            </div>

            <ParagrafoErro>{errors.name && errors.name?.message}</ParagrafoErro>

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
                placeholder="Digite sua senha..."
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

            <label>Confirmação de senha</label>
            <div>
              <input
                required
                type={passwordOn}
                placeholder="Confirma sua senha"
                {...register("checkPassword")}
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
              {errors.checkPassword && errors.checkPassword?.message}
            </ParagrafoErro>

            <div>
              <PhoneInputStyled
                country={"br"}
                onChange={(phone) => setTel(phone)}
              />
            </div>

            <Terms>
              <input type="checkbox" name="terms" id="terms" required />
              <label htmlFor="terms">concordo com os termos e condições</label>
            </Terms>

            <LinkStyled to="/login">
              Ja possui cadastro ? ir para login <span></span>
            </LinkStyled>
            <Button>Cadastrar</Button>
          </form>
        </SectionForm>
      </DivForm>
    </RegisterStyled>
  );
};
