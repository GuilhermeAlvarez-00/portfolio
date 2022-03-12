import styled from 'styled-components'

export const HomeHeroContainer = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  overflow-x: hidden;

  @media (max-width: 750px) {
    padding: 3rem 2rem;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    width: 24rem;
    flex: 1;
  }

  @media (max-width: 750px) {
    flex-direction: column;

    img {
      margin: 6rem 0;
    }
  }
`

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex: 4;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    span {
      font-weight: 700;
      color: ${({ theme }) => theme.pink500};
    }

    font-weight: 700;
    font-size: 2.625rem;
  }

  p {
    margin: 2rem 0;
    font-size: 1.375rem;

    span {
      color: ${({ theme }) => theme.pink500};
    }
  }

  @media (max-width: 750px) {
    align-items: center;
    text-align: center;
  }
`

export const ImageContent = styled.div`
  display: flex;
  position: relative;

  span {
    color: #dddddd;
    margin-left: -3rem;
    margin-top: 3rem;
  }

  @media (max-width: 750px) {
    align-items: center;
    justify-content: center;

    span {
      margin: 0;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column-reverse;

    img {
      margin-top: -0.0625rem;
    }
  }
`

export const SocialMedias = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 4rem;

  p {
    font-size: 1.125rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`

export const MediaCircle = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #313745;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  a {
    font-size: 1.75rem;
    display: flex;
    align-items: center;
  }
`
