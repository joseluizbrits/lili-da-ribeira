import type { Metadata } from "next";
import { Grandstander } from "next/font/google";
import StylesProvider from "./lib/StylesProvider";

const inter = Grandstander({ subsets: ["latin"], weight: ["400", "500"] });

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
      <body className={inter.className}>
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  );
}
