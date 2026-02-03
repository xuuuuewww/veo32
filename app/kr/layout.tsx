import type { Metadata } from "next";
import { getAlternatesLanguages } from "@/lib/site";
import { SetLocale } from "./SetLocale";

export const metadata: Metadata = {
  alternates: {
    canonical: "/kr",
    languages: getAlternatesLanguages(),
  },
  title: "Veo 3.2 - 고품질 이미지·동영상 생성을 위한 AI 모델",
  description:
    "Veo 3.2는 이미지와 동영상 생성을 위한 고급 AI 모델입니다. 크리에이티브 및 상업적 이용을 위한 고품질 텍스트-이미지·동영상 생성.",
  openGraph: {
    locale: "ko_KR",
    title: "Veo 3.2 - 이미지·동영상 AI 모델",
    description: "Veo 3.2로 상상력을 시네마틱 8K 현실로.",
  },
};

export default function KrLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetLocale lang="ko" />
      {children}
    </>
  );
}
