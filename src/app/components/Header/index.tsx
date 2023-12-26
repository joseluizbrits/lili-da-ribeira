"use client";

import Link from "next/link";
import { wendy_one } from "@/app/lib/fonts";
import { Wrapp, Logo } from "./styles";
import WhatsappColored from "@/app/icons/WhatsappColored";

function Header() {
  return (
    <header>
      <Wrapp>
        <Logo className={wendy_one.className}>Lili da Ribeira</Logo>
        <Link href="https://api.whatsapp.com/send?phone=5521994056843&text=Quero%20reservar%20a%20minha%20encomenda">
          <WhatsappColored />
        </Link>
      </Wrapp>
    </header>
  );
}

export default Header;
