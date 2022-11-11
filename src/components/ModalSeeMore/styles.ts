import styled from "styled-components";
import { entringOpacity, modalEfectTransition } from "../../styles/animation";

export const ModalStyled = styled.div`
  animation: ${entringOpacity} 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000099;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-width: var(--min-widtch-container);
  height: 100vh;
  z-index: 102;
  animation: ${entringOpacity} 0.3s;
  > span {
    animation: ${modalEfectTransition} 0.3s;
    width: 100%;
    max-width: 25rem;
    min-height: 12.5rem;
    background-color: var(--Secondary);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1rem;
    position: relative;
    gap: 1rem;
    border: 0.125rem solid var(--Primary-Hover);
    margin: 0 1rem;
    animation: ${modalEfectTransition} 0.3s;
    > h2 {
      font-size: 2rem;
      width: 100%;
      padding: 1.25rem 0;
      text-align: center;
      background-color: var(--Primary-Hover);
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
      color: var(--Input-Background);
    }
    > button {
      position: absolute;
      top: 0px;
      right: 0px;
      background-color: transparent;
      border: 0;
      font-size: 1.5rem;
      font-weight: 700;
      cursor: pointer;
      color: var(--Input-Background);
    }
    > p {
      margin: 0 1rem;
    }
    > div {
      margin: 0 1rem 1.25rem 1rem;
      display: flex;
      align-items: center;
      gap: 1rem;

      > a {
        text-decoration: none;
        color: var(--Primary);
        font-weight: 700;
        :hover {
          color: var(--Primary-Hover);
        }
      }
    }
  }
`;
