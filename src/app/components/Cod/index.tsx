"use client";

import { nunito } from "@/app/lib/fonts";
import { Button, Container, Paragraph, Title } from "./styles";

function Cod() {
  return (
    <Container>
      <Title>Bacalhau autêntico</Title>
      <Paragraph>
        Lili da Ribeira usa o melhor do sabor do mar. Perfeito para festas,
        reuniões entre amigos e momentos especiais em família
      </Paragraph>
      <Button href="#" className={nunito.className}>
        Encomende sua massa
      </Button>
    </Container>
  );
}

export default Cod;
