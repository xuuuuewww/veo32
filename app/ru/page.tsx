"use client";

import { HomeContent } from "@/components/HomeContent";
import { translations } from "@/lib/translations";

export default function RuHome() {
  return <HomeContent t={translations.ru} locale="ru" />;
}
