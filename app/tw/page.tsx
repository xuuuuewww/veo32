"use client";

import { HomeContent } from "@/components/HomeContent";
import { translations } from "@/lib/translations";

export default function TwHome() {
  return <HomeContent t={translations.tw} locale="tw" />;
}
