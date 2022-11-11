import styled from "styled-components";
import { AnimationFadeIn } from "../../styles/animation";

export const ParagrafoErro = styled.p`
  color: var(--Error);
  font-size: 0.688rem;
  margin-left: 0.375rem;
  font-weight: 500;
  height: 0.75rem;
  animation: ${AnimationFadeIn} 0.3s linear forwards;
`;
