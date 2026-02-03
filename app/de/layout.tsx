import type { Metadata } from "next";
import { getAlternatesLanguages } from "@/lib/site";
import { SetLocale } from "./SetLocale";

export const metadata: Metadata = {
  alternates: {
    canonical: "/de",
    languages: getAlternatesLanguages(),
  },
  title: "Veo 3.2 - KI-Modell für hochwertige Bild- und Videogenerierung",
  description:
    "Veo 3.2 ist ein fortgeschrittenes KI-Modell für Bild- und Videogenerierung. Erstelle hochwertige Inhalte aus Text für kreative und kommerzielle Nutzung.",
  openGraph: {
    locale: "de_DE",
    title: "Veo 3.2 - KI-Modell für Bild und Video",
    description: "Verwandle deine Vorstellung in cinematografische 8K-Realität mit Veo 3.2.",
  },
};

export default function DeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetLocale lang="de" />
      {children}
    </>
  );
}
