import { Link } from "react-router-dom";
import styled from "styled-components";
import { entringOpacity } from "../../styles/animation";

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  flex-wrap: wrap;
  > h1 {
    font-family: var(--font-family-2);
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 2.938rem;
    text-align: center;
    color: var(--Black);
    cursor: default;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    > img {
      max-width: 3.125rem;
    }
    > p {
      font-size: 0.875rem;
      line-height: 1.875rem;
      text-align: center;
      color: var(--Black);
      cursor: default;
    }
    > button {
      font-size: 0.875rem;
      line-height: 1.875rem;
      text-align: center;
      color: var(--Black);
      border: none;
      background-color: transparent;
      cursor: pointer;
      position: relative;
      > span {
        position: absolute;
        left: 0;
        bottom: 0.188rem;
        height: 0.125rem;
        background-color: var(--Primary);
      }
      :hover span {
        animation: ${entringOpacity} 0.3s linear forwards;
      }
    }
  }
`;

export const LinkSettingStyled = styled(Link)`
  font-size: 0.875rem;
  line-height: 1.875rem;
  text-align: center;
  color: var(--Black);
  cursor: pointer;
  position: relative;
  text-decoration: none;
  > span {
    position: absolute;
    left: 0;
    bottom: 0.188rem;
    height: 0.125rem;
    background-color: var(--Primary);
  }
  :hover span {
    animation: ${entringOpacity} 0.3s linear forwards;
  }
`;
