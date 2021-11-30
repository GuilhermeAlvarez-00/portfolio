import { ReactNode } from "react";
import { TitleContainer } from "./styles";

interface TitleProps {
  text: string | ReactNode;
}

export function Title({ text} : TitleProps) {
  return (
    <TitleContainer>
      <h1>{text}</h1>
    </TitleContainer>
  )
}