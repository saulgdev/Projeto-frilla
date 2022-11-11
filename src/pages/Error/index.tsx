import imagemError from "../../assets/error.png";

import { LinkStyled } from './../../components/StyledLink/styled';
import { ErrorStyled, ErrorContainer, Warning } from "./styles";

export const Error = () => {
  return (
    <ErrorStyled>
      <ErrorContainer>
        <img src={imagemError} alt="" />
        <Warning>
          <h1>404</h1>
          <h2>Ops! a pagina não foi encontrada</h2>
          <LinkStyled
           to="/">Voltar para a pagina inicial</LinkStyled>
        </Warning>
      </ErrorContainer>
    </ErrorStyled>
  );
};
