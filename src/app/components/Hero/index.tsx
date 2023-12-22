"use client";

import { Title, IconWrapper, Container } from "./styles";
import Waves from "@/app/icons/Waves";

function Hero() {
  return (
    <Container>
      <Title>
        <span>Delícias da Lili:</span>Encomendas de Massa para Bolinho de
        Bacalhau
      </Title>
      <IconWrapper>
        <Waves />
      </IconWrapper>
    </Container>
  );
}

export default Hero;
