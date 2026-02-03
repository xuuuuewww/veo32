import type { Metadata } from "next";
import { getAlternatesLanguages } from "@/lib/site";
import { SetLocale } from "./SetLocale";

export const metadata: Metadata = {
  alternates: {
    canonical: "/ru",
    languages: getAlternatesLanguages(),
  },
  title: "Veo 3.2 — AI-модель для качественного изображения и видео",
  description:
    "Veo 3.2 — продвинутая AI-модель для генерации изображений и видео. Создавайте качественный контент из текста для творческих и коммерческих задач.",
  openGraph: {
    locale: "ru_RU",
    title: "Veo 3.2 — AI для изображения и видео",
    description: "Превратите воображение в кинематографичную 8K реальность с Veo 3.2.",
  },
};

export default function RuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetLocale lang="ru" />
      {children}
    </>
  );
}
