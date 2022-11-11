import styled from "styled-components";
import { entringOpacity } from "../../styles/animation";

export const ContainerHome = styled.div`
  max-width: var(--max-widtch-container);
  min-width: var(--min-widtch-container);
  margin: 2rem auto;
  animation: ${entringOpacity} 0.3s;
`;

export const HomeTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 2.5rem;
  > img {
    max-width: 100%;
  }
  > div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    max-width: 28.125rem;
    > h1 {
      font-size: 2.375rem;
      line-height: 3rem;
      > span {
        color: var(--Primary);
      }
    }
    > p {
      font-weight: 500;
      font-size: 1.25rem;
      line-height: 1.875rem;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const BtnsFilter = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
  > ul {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    overflow: auto;
    > li {
      > button {
        min-width: 7.5rem;
        height: 3.75rem;
        background-color: var(--Primary);
        border-radius: 0.625rem;
        font-family: var(--font-family-1);
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.875rem;
        text-align: center;
        border: transparent;
        color: var(--Secondary);
        cursor: pointer;
        :hover {
          background: var(--Primary-Hover);
        }
      }
    }
  }
`;

export const HomeStyled = styled.div`
  width: 100%;
  > ul {
    padding: 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    > li {
      animation: ${entringOpacity} 0.3s;
      display: flex;
      flex-direction: column;
      gap: 0.938rem;
      justify-content: space-between;
      width: 100%;
      max-width: 28.125rem;
      border: 0.125rem solid var(--Primary);
      border-radius: 0.5rem;
      position: relative;
      > h2 {
        font-weight: 700;
        font-size: 1.5rem;
        letter-spacing: 0.063rem;
        padding: 1rem 1rem 0 1rem;
      }
      > span {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-weight: 700;
        font-size: 0.938rem;
        line-height: 1.375rem;
        color: var(--Primary);
      }
      > p {
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.375rem;
        letter-spacing: 0.063rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        padding: 0 1rem;
      }

      @media (min-width: 768px){
       p{

          width: 25rem;;

        }
      }
      > strong {
        font-weight: 600;
        font-size: 1.125rem;
        line-height: 1.375rem;
        padding: 0 1rem;
      }
      > button {
        align-self: flex-end;
        width: 9.25rem;
        height: 2rem;
        cursor: pointer;
        background: var(--Primary);
        border-radius: 3.125rem;
        border: transparent;
        font-weight: 700;
        font-size: 0.938rem;
        line-height: 1.375rem;
        color: var(--Secondary);
        margin: 0 1rem 1rem 1rem;
        :hover {
          background: var(--Primary-Hover);
        }
      }
    }
  }
`;
