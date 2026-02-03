"use client";

import { HomeContent } from "@/components/HomeContent";
import { translations } from "@/lib/translations";

export default function DeHome() {
  return <HomeContent t={translations.de} locale="de" />;
}
