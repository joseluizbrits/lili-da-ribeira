"use client";
import { nunito } from "@/app/lib/fonts";
import { Button, Container, Content, Title } from "./styles";
import Animation from "./animation";

function Contact() {
  Animation();

  return (
    <Container id="contact">
      <Content>
        <Title>Entre em contato e faça já o seu pedido!</Title>
        <Button className={nunito.className}>Entrar em contato</Button>
      </Content>
    </Container>
  );
}

export default Contact;
