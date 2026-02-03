import type { Metadata } from "next";
import { getAlternatesLanguages } from "@/lib/site";
import { SetLocale } from "./SetLocale";

export const metadata: Metadata = {
  alternates: {
    canonical: "/es",
    languages: getAlternatesLanguages(),
  },
  title: "Veo 3.2 - Modelo de IA para imagen y vídeo de alta calidad",
  description:
    "Veo 3.2 es un modelo de IA avanzado para generación de imagen y vídeo. Crea contenido de alta calidad a partir de texto para uso creativo y comercial.",
  openGraph: {
    locale: "es_ES",
    title: "Veo 3.2 - Modelo de IA para imagen y vídeo",
    description: "Transforma tu imaginación en realidad cinematográfica en 8K con Veo 3.2.",
  },
};

export default function EsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetLocale lang="es" />
      {children}
    </>
  );
}
