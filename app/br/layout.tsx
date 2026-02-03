import type { Metadata } from "next";
import { getAlternatesLanguages } from "@/lib/site";
import { SetLocale } from "./SetLocale";

export const metadata: Metadata = {
  alternates: {
    canonical: "/br",
    languages: getAlternatesLanguages(),
  },
  title: "Veo 3.2 - Modelo de IA para imagem e vídeo de alta qualidade",
  description:
    "Veo 3.2 é um modelo de IA avançado para geração de imagens e vídeos. Crie conteúdo de alta qualidade a partir de texto para uso criativo e comercial.",
  openGraph: {
    locale: "pt_BR",
    title: "Veo 3.2 - Modelo de IA para imagem e vídeo",
    description: "Transforme sua imaginação em realidade cinematográfica 8K com o Veo 3.2.",
  },
};

export default function BrLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetLocale lang="pt-BR" />
      {children}
    </>
  );
}
