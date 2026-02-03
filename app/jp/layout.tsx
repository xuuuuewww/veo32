import type { Metadata } from "next";
import { getAlternatesLanguages } from "@/lib/site";
import { SetLocale } from "./SetLocale";

export const metadata: Metadata = {
  alternates: {
    canonical: "/jp",
    languages: getAlternatesLanguages(),
  },
  title: "Veo 3.2 - 高品質な画像・動画生成のためのAIモデル",
  description:
    "Veo 3.2は画像・動画生成のための高度なAIモデルです。クリエイティブおよび商用利用のための高品質なテキストから画像・動画を作成します。",
  openGraph: {
    locale: "ja_JP",
    title: "Veo 3.2 - 画像・動画のAIモデル",
    description: "Veo 3.2で想像をシネマティックな8Kの現実に。",
  },
};

export default function JpLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetLocale lang="ja" />
      {children}
    </>
  );
}
