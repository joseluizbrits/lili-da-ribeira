"use client";
import { nunito } from "@/app/lib/fonts";
import { Button, Container, Content, Title } from "./styles";

function Contact() {
  return (
    <Container>
      <Content>
        <Title>Entre em contato e faça já o seu pedido!</Title>
        <Button className={nunito.className}>Entrar em contato</Button>
      </Content>
    </Container>
  );
}

export default Contact;
