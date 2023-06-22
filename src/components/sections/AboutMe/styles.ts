import styled from "styled-components";

import { Section, Container } from "../../../styles/commonStyles";

export const SectionAbout = styled(Section)`
  background: ${({ theme }) => theme.black900};
`;

export const ContainerAbout = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 868px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

export const ContentImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 23.75rem;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 20rem;
  }
`;

export const ContentText = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 600;

    span {
      color: ${({ theme }) => theme.pink500};
    }
  }

  div {
    margin-top: 1.125rem;

    p:not(:first-child) {
      margin-top: 2.5rem;
    }

    p {
      color: ${({ theme }) => theme.white200};
      font-size: 1.25rem;
      strong {
        color: ${({ theme }) => theme.pink500};
      }
    }

    p:last-child {
      color: ${({ theme }) => theme.white300};
      font-size: 1rem;
      font-style: italic;
    }

    @media (max-width: 868px) {
      p {
        font-size: 1.125rem;
      }
    }
  }

  @media (max-width: 868px) {
    margin-top: 2rem;
    text-align: center;
  }
`;

