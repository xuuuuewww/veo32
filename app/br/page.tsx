"use client";

import { HomeContent } from "@/components/HomeContent";
import { translations } from "@/lib/translations";

export default function BrHome() {
  return <HomeContent t={translations.br} locale="br" />;
}
