import styled from "styled-components";

import { SubSection, Container } from "../../../styles/commonStyles";

export const SectionProjectDescription = styled(SubSection)``;

export const ContainerProjectDescription = styled(Container)``;

export const CardProjectDetails = styled.div`
  width: min(46.875rem, 100%);
  padding: 3.875rem;
  background: ${({ theme }) => theme.black900};
  margin: 0 auto;
  border-radius: 3.125rem;
`;

export const ImageWrapper = styled.div`
  width: min(36.375rem, 100%);
  height: 26.625rem;
  margin-top: -10rem;
  border-radius: 0.3125rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 590px) {
    height: 20rem;
  }

  @media (max-width: 480px) {
    height: 15rem;
  }

  @media (max-width: 390px) {
    height: 13.75rem;
  }
`;

export const TextContent = styled.div`
  margin-top: 4rem;

  h2 {
    color: ${({ theme }) => theme.pink500};
  }

  p {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.white200};
    margin-top: 1.125rem;
  }

  div {
    margin-top: 2.375rem;
    display: flex;
    gap: 1.25rem;
  }

  @media (max-width: 400px) {
    div {
      flex-direction: column;
      gap: 0rem;
    }
  }
`;

