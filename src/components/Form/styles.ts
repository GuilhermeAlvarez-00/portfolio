import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  background: ${({ theme }) => theme.blue900};
  box-shadow: 0.1px 0.1px 4px 1px #FF2359;
  border-radius: 0.2rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    width: 100%;
    padding: 0.6rem 0;
    background: ${({ theme }) => theme.pink500};
    border: 0;
    border-radius: 4px;
    color: ${({ theme }) => theme.white};
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2rem;
    transition: 0.2s;

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.pink500)};
    }
  }
`

export const Input = styled.input`
  width: 100%;
  height: 2.6rem;
  border-radius: 4px;
  padding-left: 0.8rem;
  border: 0;
  background: ${({ theme }) => theme.gray800};
  color: ${({ theme }) => theme.white};
  outline: none;

  &:not(:nth-child(1)) {
    margin-top: 2rem;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.pink500};
  }
`

export const MessageInput = styled.textarea`
  width: 100%;
  height: 8rem;
  border-radius: 4px;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  padding-top: 0.4rem;
  border: 0;
  background: ${({ theme }) => theme.gray800};
  color: ${({ theme }) => theme.white};
  resize: none;
  outline: none;

  &:not(:nth-child(1)) {
    margin-top: 2rem;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.pink500};
  }
`
