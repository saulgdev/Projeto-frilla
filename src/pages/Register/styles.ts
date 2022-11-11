import PhoneInput from "react-phone-input-2";
import styled from "styled-components";
import { AnimationFadeIn, entringOpacity } from "../../styles/animation";

export const RegisterStyled = styled.div`
  animation: ${entringOpacity} 0.3s;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-1);
  font-style: normal;
  margin-top: 2.5rem;
`;

export const DivForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const BlockLogo = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 12.5rem;
    height: 100%;
    background: var(--Primary);
    border-radius: 0.625rem;
  }
`;

export const SectionForm = styled.section`
  width: 100%;
  max-width: 25rem;
  > form {
    padding: 0 1.688rem;
    display: flex;
    flex-direction: column;
    animation: ${AnimationFadeIn} 0.1s linear forwards;

    > h1 {
      font-weight: 700;
      font-size: 2rem;
      line-height: 3rem;
      color: var(--Primary);
      cursor: default;
    }
    > label {
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.313rem;
      color: var(--Black);
      margin: 0.375rem;
      cursor: default;
    }
    > div {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 100%;
      > input {
        background: var(--Input-Background);
        border-radius: 0.5rem;
        height: 3.25rem;
        padding: 0 1.563rem;
        border: none;
      }
      > span {
        position: absolute;
        top: 1.125rem;
        right: 0.625rem;
        cursor: pointer;
      }
    }
    > select {
      background: var(--Input-Background);
      border-radius: 0.5rem;
      height: 3.25rem;
      padding: 0 1.563rem;
      border: none;
    }
    > button {
      height: 3.25rem;
      background: var(--Primary);
      border-radius: 0.5rem;
      border: none;
      font-weight: 700;
      font-size: 0.813rem;
      line-height: 1.25rem;
      text-align: center;
      color: var(--Secondary);
      margin-top: 0.625rem;
      cursor: pointer;
      transition: 0.3s;
      :hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const Terms = styled.span`
  gap: 0.625rem;
  font-weight: 500;
  font-size: 0.813rem;
  display: flex;
  align-items: center;
  color: rgba(23, 115, 105, 0.6);
  margin: 1.563rem 0;
  text-decoration: none;
  cursor: pointer;
  > label {
    cursor: pointer;
  }
  > input {
    cursor: pointer;
  }
  > :hover {
    color: var(--Primary);
  }
`;

export const PhoneInputStyled = styled(PhoneInput)`
  .form-control {
    width: 100%;
  }
`;
