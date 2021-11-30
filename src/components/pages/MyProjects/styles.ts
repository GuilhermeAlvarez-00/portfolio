import { darken } from "polished";
import styled from "styled-components";

interface ProjectContainerProps {
  imgUrl: string;
}

export const MyProjectsContainer = styled.section`
  width: 100%;
  padding: 8rem 2rem;

  @media (max-width: 750px) {
    padding: 4rem 2rem;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  > button {
    border: none;
    border-radius: 0.2rem;
    background: ${({ theme }) => theme.pink500};
    font-weight: 500;
    color: ${({ theme }) => theme.white};
    display: flex;
    align-self: center;
    justify-content: center;
    padding: 1rem 2rem;
    width: fit-content;
    transition: 0.2s;

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.pink500)};
    }
  }
`

export const ProjectContainer = styled.div<ProjectContainerProps>`
  width: 100%;
  height: 25rem;
  display: flex;
  align-items: flex-end;
  position: relative;
  margin: 4rem 0;

  section {
    width: 40rem;
    height: 100%;
    background-image: url('${props => props.imgUrl}');
    background-size: cover;
    background-position: center;
    position: relative;

    div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.5;
      background: #000;
      transition: 0.2s;
    }

    div.text-content {
      width: fit-content;
      position: absolute;
      top: 3rem;
      right: -6rem;
      transition: 0.2s;

      h1 {
        font-weight: 700;
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
        font-weight: 300;
        color: ${({ theme }) => theme.pink500};
      }
    }
  }

  button {
    border: none;
    background: transparent;
    margin: 0 0 3rem 5rem;

    a {
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      color: ${({ theme }) => theme.white};
      transition: color 0.2s;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    section {
      div.text-content {
        left: -6rem;
      }
    }

    button {
      margin: 0  3rem 5rem 0;
    }

    &:hover {
      section {
        div.text-content {
          left: -12rem;
        }

        button {
          a {
            color: ${({ theme }) => theme.pink500};
          }
        }
    }
    }
  }

  &:hover {
    section {
      div.overlay {
        opacity: 0.3;
      }

      div.text-content {
        right: -12rem;
      }
    }

    button {
      a {
        color: ${({ theme }) => theme.pink500};
      }
    }
  }

  @media (max-width: 840px) {
    section {
      width: 30rem;

      div.text-content {
        right: -4rem;
      }
    }

    button {
      margin-left: 2rem;
    }

    &:nth-child(even) {
      section {
        div.text-content {
          left: -4rem;
        }
      }

      button {
        margin-right: 2rem;
      }
    }
  }

  @media (max-width: 750px) {
    section {
      width: 100%;

      div.text-content {
        left: 2rem;
      }
    }

    button {
      position: absolute;
      left: 0;
      margin: 0 0 2rem 2rem;
    }

    &:nth-child(even) {
      flex-direction: row;

      section {
        div.text-content {
          left: 2rem;
        }
      }

      button {
        position: absolute;
        left: 0;
        margin: 0 0 2rem 2rem;
      }

      &:hover {
        section div.text-content {
          left: 2rem;
        }
      }
    }
  }
`
