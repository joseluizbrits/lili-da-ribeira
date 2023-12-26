import type { Metadata } from "next";
import { grandstander } from "./lib/fonts";
import StylesProvider from "./styles/StylesProvider";

export const metadata: Metadata = {
  title: "Encomenda de Massa para Bolinho de Bacalhau | Lili da Ribeira",
  description:
    "Massa para bolinho de bacalhau já pronta, feita com carinho artesanal carregado de tradição familiar. Perfeito para a suas festas e comemorações!",
  keywords: ["Bacalhau", "Bolinho", "Massa"],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/pt-BR",
    },
  },
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Encomenda de Massa para Bolinho de Bacalhau | Lili da Ribeira",
    description:
      "Massa para bolinho de bacalhau já pronta, feita com carinho artesanal carregado de tradição familiar. Perfeito para a suas festas e comemorações!",
    type: "website",
    url: "https://lilidaribeira.com.br",
    siteName: "Lili da Ribeira",
    locale: "pt_BR",
  },
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
