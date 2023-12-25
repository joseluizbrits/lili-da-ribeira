"use client";

import {
  Container,
  Content,
  HandsOn,
  ImageWrapper,
  LastDescription,
  Title,
} from "./styles";

import Image from "next/image";
import storyDescriptions from "@/app/utils/storyDescriptions";
import handsOn from "../../../../public/hands-on.png";
import Animation from "./animation";

function About() {
  Animation(storyDescriptions);

  return (
    <Container id="about">
      <Title>Sobre Lili</Title>
      <Content>
        {storyDescriptions.map(({ id, img, alt, desc }) => (
          <ImageWrapper key={id} id={id}>
            <Image
              src={img}
              alt={alt}
              fill
              priority
              style={{ objectFit: "cover", borderRadius: "20px" }}
            />
            <p>{desc}</p>
          </ImageWrapper>
        ))}
        <LastDescription className="last-paragraph">
          Com sua pegada artesanal ela faz uma massa única através do sabor do
          autêntico bacalhau
        </LastDescription>
      </Content>
      <HandsOn>
        <Image
          className="hands-on"
          src={handsOn}
          alt="Mãos da Lili da Ribeira apertando a massa"
          fill
          priority
        />
      </HandsOn>
    </Container>
  );
}

export default About;
