"use client";

import { HomeContent } from "@/components/HomeContent";
import { translations } from "@/lib/translations";

export default function EsHome() {
  return <HomeContent t={translations.es} locale="es" />;
}
