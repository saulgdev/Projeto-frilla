import { Link } from "react-router-dom";
import styled from "styled-components";
import { entring } from "../../styles/animation";

export const LinkStyled = styled(Link)`
  width: fit-content;
  font-weight: 500;
  font-size: 0.813rem;
  line-height: 1.25rem;
  display: flex;
  align-items: flex-end;
  color: rgba(23, 115, 105, 0.6);
  margin-top: 0.875rem;
  margin-left: 1.25rem;
  text-decoration: none;
  position: relative;
  > span {
    position: absolute;
    left: 0;
    bottom: 0.125rem;
    height: 0.063rem;
    background-color: var(--Primary);
  }
  :hover span {
    animation: ${entring} 0.3s linear forwards;
  }
  :hover {
    color: var(--Primary);
  }
`;
