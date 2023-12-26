"use client";
import { nunito } from "@/app/lib/fonts";
import { Button, Container, Content, Title } from "./styles";
import Animation from "./animation";
import Link from "next/link";

function Contact() {
  Animation();

  return (
    <Container id="contact">
      <Content>
        <Title>Entre em contato e faça já o seu pedido!</Title>
        <Button
          href="https://api.whatsapp.com/send?phone=5521994056843&text=Quero%20reservar%20a%20minha%20encomenda"
          className={nunito.className}
        >
          Entrar em contato
        </Button>
      </Content>
    </Container>
  );
}

export default Contact;
