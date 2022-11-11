import { ButtonStyled } from "./ButtonStyled";

interface iButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: iButtonProps) => {
  return <ButtonStyled type="submit">{children}</ButtonStyled>;
};
