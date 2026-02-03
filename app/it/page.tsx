"use client";

import { HomeContent } from "@/components/HomeContent";
import { translations } from "@/lib/translations";

export default function ItHome() {
  return <HomeContent t={translations.it} locale="it" />;
}
