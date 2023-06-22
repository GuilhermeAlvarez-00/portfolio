import styled from "styled-components";

interface ContainerProps {
  outline?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 8.625rem;
  height: 2.375rem;
  border-radius: 0.31rem;
  border: ${({ theme, outline }) =>
    outline ? `2px solid ${theme.pink500}` : 0};
  background: ${({ theme, outline }) =>
    outline ? "transparent" : theme.pink500};
  margin-top: 1.125rem;
  transition: 0.2s;

  a {
    font-size: 1.125rem;
    font-family: "Montserrat", sans-serif;
    color: ${({ theme }) => theme.white};
    font-weight: 400;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

