"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import type { Locale, NavFooterT } from "@/lib/translations";

const LOGO_SRC = "https://img.virax.ai/admin_images/1770014352602_vlogo.png";
const VIRAX_URL = "https://www.virax.ai/";

type SiteFooterProps = {
  t: NavFooterT;
  locale: Locale;
};

export function SiteFooter({ t, locale }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/5 py-20 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <a href={VIRAX_URL} aria-label={t.aria.navVirax}>
              <img
                src={LOGO_SRC}
                alt="Veo 3.2 Logo"
                width={36}
                height={36}
                className="h-9 w-auto select-none drop-shadow-[0_0_18px_rgba(168,85,247,0.8)]"
              />
            </a>
          </div>
          <p className="text-white/30 text-sm max-w-xs leading-relaxed">{t.footer.tagline}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs">
        <p>{t.footer.copyright}</p>
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          <LanguageSwitcher currentLocale={locale} />
          <a className="hover:text-white/40 transition-colors" href={VIRAX_URL} aria-label={t.aria.navVirax}>
            {t.footer.terms}
          </a>
          <a className="hover:text-white/40 transition-colors" href={VIRAX_URL} aria-label={t.aria.navVirax}>
            {t.footer.privacy}
          </a>
          <a className="hover:text-white/40 transition-colors" href={VIRAX_URL} aria-label={t.aria.navVirax}>
            {t.footer.cookies}
          </a>
        </div>
      </div>
    </footer>
  );
}
