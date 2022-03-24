import styled from 'styled-components'

interface ContainerProps {
  background: string
}

export const Container = styled.div`
  width: 100%;
  max-width: 25rem;
  height: 15.625rem;
  position: relative;
  border-radius: 0.625rem;
  overflow: hidden;
  display: flex;

  img {
    width: 100%;
  }

  @media (max-width: 648px) {
    max-width: 100%;
  }
`

export const Text = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: background-color, 0.2s;
  cursor: pointer;

  h2 {
    margin-top: 350px;
    transition: margin-top, 0.2s;
    color: ${({ theme }) => theme.pink500};
  }

  &:hover {
    opacity: 1;

    h2 {
      margin-top: 0;
    }
  }
`

/* ${({ background }) => `url(${background})`} */
