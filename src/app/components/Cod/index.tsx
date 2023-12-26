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
        <Button
          href="https://api.whatsapp.com/send?phone=5521994056843&text=Quero%20reservar%20a%20minha%20encomenda"
          className={nunito.className}
        >
          Encomende sua massa
        </Button>
      </Content>
    </Container>
  );
}

export default Cod;
