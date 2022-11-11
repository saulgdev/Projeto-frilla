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
  z-index: 102;
  animation: ${entringOpacity} 0.3s;
  > span {
    animation: ${modalEfectTransition} 0.3s;
    padding: 1rem;
    width: 100%;
    animation: ${animateModalContainer} 0.3s;
    > form {
      max-width: 25rem;
      background-color: var(--Secondary);
      display: flex;
      flex-direction: column;
      padding: 2rem;
      border-radius: 1rem;
      border: 0.125rem solid var(--Primary-Hover);
      position: relative;
      gap: 0.313rem;
      margin: 0 auto;
      > label {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.875rem;
        color: var(--Black);
        padding-left: 0.5rem;
      }
      > input {
        padding: 0.75rem;
        border-radius: 0.5rem;
        border: none;
      }
      > select {
        padding: 0.75rem;
        border-radius: 0.5rem;
        border: none;
      }
      > div {
        display: flex;
        justify-content: center;
        gap: 1rem;

        > button {
          border-radius: 3.125rem;
          background-color: var(--Primary);
          border: none;
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
