import styled from "styled-components";
import {
  animateModalContainer,
  entringOpacity,
  modalEfectTransition,
} from "../../styles/animation";

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
  height: 100vh;
  z-index: 101;
  animation: ${entringOpacity} 0.3s;
  > span {
    animation: ${modalEfectTransition} 0.3s;
    padding: 1rem;
    width: 100%;
    animation: ${animateModalContainer} 0.3s;
    > div {
      max-width: 25rem;
      background-color: var(--Secondary);
      display: flex;
      flex-direction: column;
      padding: 2rem;
      border-radius: 1rem;
      border: 0.125rem solid var(--Primary-Hover);
      position: relative;
      gap: 0.75rem;
      text-align: center;
      margin: 0 auto;
      > div {
        display: flex;
        justify-content: center;
        gap: 0.938rem;
        > button {
          background-color: var(--Primary);
          border: none;
          border-radius: 3.125rem;
          font-weight: 700;
          font-size: 0.938rem;
          line-height: 1.375rem;
          color: var(--Secondary);
          padding: 0.375rem 1.375rem;
          cursor: pointer;
          :hover {
            background-color: var(--Primary-Hover);
          }
        }
      }
    }
  }
`;
