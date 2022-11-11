import styled from "styled-components";
import { entringOpacity } from "../../styles/animation";

export const SettingStyled = styled.div`
  margin: 2rem auto;
  max-width: var(--max-widtch-container);
  min-width: var(--min-widtch-container);
  animation: ${entringOpacity} 0.3s ease;
`;

export const InterestedStyled = styled.section`
  > div {
    display: flex;
    padding: 1rem;
    gap: 2.5rem;
    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.938rem;
      padding: 0.938rem 1.875rem;
      border: 0.063rem solid var(--Primary);
      border-radius: 1.563rem;
      background-color: var(--Primary);
      color: var(--Secondary);
      cursor: pointer;
      transition: 0.3s;
      > span {
        font-size: 2.188rem;
        transition: 0.3s;
      }
      > p {
        font-weight: 700;
        font-size: 1.375rem;
        line-height: 3rem;
        transition: 0.3s;
      }
      :hover {
        background-color: var(--Primary-Hover);
      }
      :hover p {
        color: var(--Secondary);
      }
      :hover span {
        color: var(--Secondary);
      }
    }
  }
`;

export const ServiceStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 2.5rem;
  > h2 {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 3.375rem;
    color: var(--Primary);
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem;
    > li {
      width: 100%;
      max-width: 28.125rem;
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
      border: 0.125rem solid var(--Primary);
      border-radius: 1.563rem;
      padding: 1.875rem;
      position: relative;
      > span {
        position: absolute;
        top: 1.875rem;
        right: 1.875rem;
        font-weight: 700;
        font-size: 0.938rem;
        line-height: 1.375rem;
        color: var(--Primary);
      }
      > h3 {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 2.25rem;
        color: var(--Black);
      }
      > p {
        font-weight: 500;
        font-size: 0.938rem;
        line-height: 1.375rem;
        color: var(--Black);
      }
      > div {
        display: flex;
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
          transition: 0.3s;
          :hover {
            background-color: var(--Primary-Hover);
          }
        }
      }
    }
  }
`;
