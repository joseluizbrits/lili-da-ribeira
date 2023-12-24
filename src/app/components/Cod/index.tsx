"use client";

import { nunito } from "@/app/lib/fonts";
import { Button, Container, Content, Paragraph, Title } from "./styles";

function Cod() {
  return (
    <Container>
      <Content>
        <Title>Bacalhau autêntico</Title>
        <Paragraph>
          Lili da Ribeira usa o melhor do sabor do mar. Perfeito para festas,
          reuniões entre amigos e momentos especiais em família
        </Paragraph>
        <Button href="#" className={nunito.className}>
          Encomende sua massa
        </Button>
      </Content>
    </Container>
  );
}

export default Cod;
