import styled from "styled-components";

import { Section, Container } from "../../../styles/commonStyles";

export const SectionHome = styled(Section)``;

export const ContainerHome = styled(Container)`
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContentText = styled.div`
  position: relative;

  h1 {
    span {
      color: ${({ theme }) => theme.pink500};
    }
  }

  & > p {
    font-size: 1.25rem;
    margin-top: 1.125rem;
  }

  @media (max-width: 768px) {
    text-align: center;

    h1 {
      font-size: 2.375rem;
    }

    p {
      font-size: 1.125rem;
    }
  }
`;

export const SocialNetworks = styled.div`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  gap: 1.125rem;

  & > p {
    font-size: 1.125rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1.125rem;

    a {
      font-size: 1.75rem;
      line-height: 0;
    }
  }

  @media (max-width: 768px) {
    & > p {
      display: none;
    }

    div {
      position: absolute;
      top: 4rem;
      right: 0;
      flex-direction: column;
    }
  }

  @media (max-width: 368px) {
    justify-content: center;
    margin: 2rem 0;

    div {
      position: inherit;
      flex-direction: row;
    }
  }
`;

export const ContentImage = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
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

