import styled from "styled-components";

export const ButtonStyled = styled.button`
  height: 3.25rem;
  background: var(--Primary);
  border-radius: 0.5rem;
  border: none;
  font-weight: 700;
  font-size: 0.813rem;
  line-height: 1.25rem;
  text-align: center;
  color: var(--Secondary);
  margin-top: 2.5rem;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    filter: brightness(0.9);
  }
`;
