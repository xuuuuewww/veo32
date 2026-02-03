/**
 * Site config for canonical URLs and hreflang alternates.
 * x-default points to main domain https://www.veo32.ai
 */

export const BASE_URL = "https://www.veo32.ai";

/** path segment (empty = root) -> hreflang code */
export const LOCALES: { path: string; hreflang: string }[] = [
  { path: "", hreflang: "en" },
  { path: "br", hreflang: "pt-BR" },
  { path: "de", hreflang: "de" },
  { path: "es", hreflang: "es" },
  { path: "fr", hreflang: "fr" },
  { path: "in", hreflang: "hi" },
  { path: "it", hreflang: "it" },
  { path: "jp", hreflang: "ja" },
  { path: "kr", hreflang: "ko" },
  { path: "ru", hreflang: "ru" },
  { path: "tw", hreflang: "zh-TW" },
];

/** Path segment to HTML lang (BCP 47) for <html lang>. */
const PATH_TO_LANG: Record<string, string> = Object.fromEntries(
  LOCALES.map(({ path, hreflang }) => [path || "__root", path ? hreflang : "en"])
);

/**
 * Get HTML lang from pathname (e.g. "/br" -> "pt-BR", "/" -> "en").
 */
export function getLocaleFromPathname(pathname: string): string {
  const segment = pathname.split("/").filter(Boolean)[0];
  return PATH_TO_LANG[segment ?? "__root"] ?? "en";
}

/**
 * Build hreflang alternates for Next.js Metadata (all locales + x-default).
 */
export function getAlternatesLanguages(): Record<string, string> {
  const languages: Record<string, string> = { "x-default": BASE_URL };
  for (const { path, hreflang } of LOCALES) {
    languages[hreflang] = path ? `${BASE_URL}/${path}` : BASE_URL;
  }
  return languages;
}
