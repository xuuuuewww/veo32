"use client";

import { HomeContent } from "@/components/HomeContent";
import { translations } from "@/lib/translations";

export default function InHome() {
  return <HomeContent t={translations.in} locale="in" />;
}
