"use client";

import { HomeContent } from "@/components/HomeContent";
import { translations } from "@/lib/translations";

export default function KrHome() {
  return <HomeContent t={translations.kr} locale="kr" />;
}
