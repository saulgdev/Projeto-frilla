import styled from "styled-components";

export const ErrorStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
export const ErrorContainer = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-between;
  > img {
    width: 31.25rem;
  }
  @media (max-width: 720px) {
    flex-direction: column;
    img {
      width: 18.75rem;
    }
  }
`;

export const Warning = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-family: var(--font-family-1);
    font-weight: 700;
    font-size: 15.625rem;
    color: var(--Primary);
    @media (max-width: 720px) {
      font-size: 8.125rem;
    }
  }
  > h2 {
    width: 31.25rem;
    font-family: var(--font-family-1);
    font-weight: 700;
    font-size: 3rem;
    line-height: 4.5rem;
    text-align: center;
    color: var(--Primary);
    @media (max-width: 720px) {
      width: 18.75rem;
      font-size: 1.875rem;
      line-height: 2.5rem;
    }
  }
`;
