import styled from "styled-components";

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    width: 100%;
    height: 10rem;
    position: relative;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;
    &:hover {
      border-color: ${({ theme }) => theme.pink500};

      > div.overlay {
        opacity: 0.5;
      }
    }

    > section {
      z-index: 2;
      h1 {
        color: ${({ theme }) => theme.pink500};
        font-size: 1.5rem;
      }
      h2 {
        color: ${({ theme }) => theme.white};
        font-size: 1rem;
        font-weight: 300;
      }
    }
    > div.overlay {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.7);
      opacity: 0.7;
      transition: 0.5s;
    }
  } 
`
