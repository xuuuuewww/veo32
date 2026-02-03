import type { Metadata } from "next";
import { getAlternatesLanguages } from "@/lib/site";
import { SetLocale } from "./SetLocale";

export const metadata: Metadata = {
  alternates: {
    canonical: "/fr",
    languages: getAlternatesLanguages(),
  },
  title: "Veo 3.2 - Modèle IA pour image et vidéo haute qualité",
  description:
    "Veo 3.2 est un modèle d'IA avancé pour la génération d'images et de vidéos. Créez du contenu de haute qualité à partir de texte pour un usage créatif et commercial.",
  openGraph: {
    locale: "fr_FR",
    title: "Veo 3.2 - Modèle IA pour image et vidéo",
    description: "Transformez votre imagination en réalité cinématographique 8K avec Veo 3.2.",
  },
};

export default function FrLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetLocale lang="fr" />
      {children}
    </>
  );
}
