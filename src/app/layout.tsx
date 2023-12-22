import type { Metadata } from "next";
import { grandstander } from "./lib/fonts";
import StylesProvider from "./styles/StylesProvider";

export const metadata: Metadata = {
  title: "Lili da Ribeira",
  description: "Encomenda de massa para Bolinho de Bacalhau",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={grandstander.className}>
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  );
}
