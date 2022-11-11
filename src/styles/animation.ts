import { keyframes } from "styled-components";

export const AnimationFadeIn = keyframes`
    from{
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

export const entring = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const entringOpacity = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const exiting = keyframes`

  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`;

export const modalEfectTransition = keyframes`
  0% {
    transform: scale(0, 0);
  }
  100% {
    transform: scale(1, 1);
  }
`;

export const animateModalContainer = keyframes`
  0% {
    opacity: 0;
    transform: scale(0, 0);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

export const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;
