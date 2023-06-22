import styled from "styled-components";

import { Section, Container } from "../../../styles/commonStyles";

export const SectionContact = styled(Section)``;

export const ContainerContact = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;

export const ContentText = styled.div`
  & > p {
    color: ${({ theme }) => theme.white200};
    font-size: 1.25rem;
    margin-top: 1.125rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-top: 1.125rem;
    color: ${({ theme }) => theme.pink500};

    svg {
      width: 1.75rem;
      height: 1.75rem;
    }

    p {
      font-size: 1.125rem;
    }
  }

  @media (max-width: 768px) {
    text-align: center;

    h1 {
      font-size: 2.375rem;
    }

    p {
      font-size: 1.125rem;
    }

    div {
      justify-content: center;
    }
  }
`;

export const ContentImage = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 2.25rem;

    img {
      width: 100%;
      max-width: 18.125rem;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 20.5rem;
  position: relative;

  @media (max-width: 768px) {
    height: 160px;
    max-width: 18.125rem;
  }
`;

