"use client";

import Link from "next/link";
import { wendy_one } from "@/app/lib/fonts";
import { Wrapp, Logo } from "./styles";
import WhatsappColored from "../../../../assets/icons/WhatsappColored";

function Header() {
  return (
    <header>
      <Wrapp>
        <Logo className={wendy_one.className}>Lili da Ribeira</Logo>
        <Link href="#">
          <WhatsappColored />
        </Link>
      </Wrapp>
    </header>
  );
}

export default Header;
