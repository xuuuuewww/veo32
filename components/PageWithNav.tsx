import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { translations, getNavFooterT } from "@/lib/translations";
import type { Locale, NavFooterT, Translations } from "@/lib/translations";

type PageWithNavProps = {
  children: React.ReactNode;
  /** Default: translations.en. Use for locale-specific pages. */
  t?: Translations;
  /** Default: "en". Use for locale-specific pages. */
  locale?: Locale;
};

/**
 * Wraps page content with site header and footer for layout consistency.
 * Use this for any new page that should have the global nav (e.g. /blog, /about).
 */
export function PageWithNav({
  children,
  t = translations.en,
  locale = "en",
}: PageWithNavProps) {
  const navT: NavFooterT = getNavFooterT(t);
  return (
    <>
      <SiteHeader t={navT} />
      <main className="min-h-screen bg-background-dark text-white pt-20">
        {children}
      </main>
      <SiteFooter t={navT} locale={locale} />
    </>
  );
}
