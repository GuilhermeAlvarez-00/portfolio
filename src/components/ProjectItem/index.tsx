import Link from "next/link";
import Image from "next/image";

import { Container, Text, ImageWrapper } from "./styles";

interface ProjectItemProps {
  uid: string;
  title: string;
  thumbnail: string;
}

export function ProjectItem({ uid, title, thumbnail }: ProjectItemProps) {
  return (
    <Link href={`/projetos/${uid}`} passHref>
      <Container>
        <ImageWrapper>
          <Image src={thumbnail} alt="image" layout="fill" objectFit="cover" />
        </ImageWrapper>
        <Text>
          <h2>{title}</h2>
        </Text>
      </Container>
    </Link>
  );
}

