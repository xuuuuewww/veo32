"use client";

import { HomeContent } from "@/components/HomeContent";
import { translations } from "@/lib/translations";

export default function JpHome() {
  return <HomeContent t={translations.jp} locale="jp" />;
}
