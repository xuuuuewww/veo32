import type { Metadata } from "next";
import { getAlternatesLanguages } from "@/lib/site";
import { SetLocale } from "./SetLocale";

export const metadata: Metadata = {
  alternates: {
    canonical: "/it",
    languages: getAlternatesLanguages(),
  },
  title: "Veo 3.2 - Modello IA per immagine e video di alta qualità",
  description:
    "Veo 3.2 è un modello IA avanzato per la generazione di immagini e video. Crea contenuti di alta qualità da testo per uso creativo e commerciale.",
  openGraph: {
    locale: "it_IT",
    title: "Veo 3.2 - Modello IA per immagine e video",
    description: "Trasforma la tua immaginazione in realtà cinematografica 8K con Veo 3.2.",
  },
};

export default function ItLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetLocale lang="it" />
      {children}
    </>
  );
}
