import styled from "styled-components";

import { Section, Container } from "../../../styles/commonStyles";

export const SectionGallery = styled(Section)`
  padding-top: 0;
`;

export const ContainerGallery = styled(Container)`
  h2 {
    margin-bottom: 4.25rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 70%;
  height: 25rem;
  position: relative;

  @media (max-width: 488px) {
    width: 100%;
    height: 20rem;
  }

  @media (max-width: 412px) {
    height: 17.5rem;
  }
`;

