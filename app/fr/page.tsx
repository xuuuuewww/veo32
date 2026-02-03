"use client";

import { HomeContent } from "@/components/HomeContent";
import { translations } from "@/lib/translations";

export default function FrHome() {
  return <HomeContent t={translations.fr} locale="fr" />;
}
