"use client";

import { Title, Container } from "./styles";

import Animation from "./animation";

function Hero() {
  Animation();

  return (
    <Container id="hero">
      <Title>
        <span>Delícias da Lili:</span>
        Encomendas de Massa para Bolinho de Bacalhau
      </Title>
    </Container>
  );
}

export default Hero;
