import type { Metadata } from "next";
import { getAlternatesLanguages } from "@/lib/site";
import { SetLocale } from "./SetLocale";

export const metadata: Metadata = {
  alternates: {
    canonical: "/tw",
    languages: getAlternatesLanguages(),
  },
  title: "Veo 3.2 - 高畫質影像與影片生成的 AI 模型",
  description:
    "Veo 3.2 是專為影像與影片生成設計的先進 AI 模型。從文字產出高畫質內容，適用創意與商業用途。",
  openGraph: {
    locale: "zh_TW",
    title: "Veo 3.2 - 影像與影片 AI 模型",
    description: "用 Veo 3.2 將想像化為電影級 8K 真實畫面。",
  },
};

export default function TwLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetLocale lang="zh-TW" />
      {children}
    </>
  );
}
