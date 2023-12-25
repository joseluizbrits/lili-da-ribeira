"use client";

import { Button, Container, Content, Paragraph, Title } from "./styles";
import Animation from "./animation";
import { nunito } from "@/app/lib/fonts";

function Cod() {
  Animation();

  return (
    <Container id="cod">
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
