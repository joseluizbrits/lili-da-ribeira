"use client";

import Link from "next/link";
import {
  Address,
  Card,
  Container,
  Copyright,
  Location,
  Logo,
  Media,
} from "./styles";

import Animation from "./animation";
import { nunito, wendy_one } from "@/app/lib/fonts";
import Whatsapp from "@/app/icons/Whatsapp";
import Facebook from "@/app/icons/Facebook";

function Footer() {
  Animation();
  return (
    <Container>
      <Logo className="logo">
        <Link href="#header">
          <span className={wendy_one.className}>Lili da Ribeira</span>
          <span className={nunito.className}>
            Massa para Bolinho de Bacalhau
          </span>
        </Link>
      </Logo>
      <Media>
        <li>
          <Link href="#">
            <Facebook />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Whatsapp />
          </Link>
        </li>
      </Media>
      <Location>
        <Card className="card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.2888517755555!2d-43.08058287491424!3d-22.828800429310014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x999b40a5a5dbe5%3A0x535feb75b994bbe8!2sR.%20Dezenove%20de%20Novembro%20-%20Para%C3%ADso%2C%20S%C3%A3o%20Gon%C3%A7alo%20-%20RJ%2C%2024431-580!5e0!3m2!1spt-BR!2sbr!4v1703358839704!5m2!1spt-BR!2sbr"
            width="100%"
            height="400px"
            style={{ border: 0, borderRadius: "20px" }}
            allowFullScreen={false}
            loading="lazy"
          />
          <Address id="address" className={nunito.className}>
            Rua Dezenove de Novembro, Paraíso - nº 569
          </Address>
          <Copyright id="copyright" className={nunito.className}>
            © Copyright {new Date().getFullYear()} -{" "}
            {new Date().getFullYear() + 1} | Lili da Ribeira | Todos os Direitos
            Reservados | Criado por BRITS
          </Copyright>
        </Card>
      </Location>
    </Container>
  );
}

export default Footer;
