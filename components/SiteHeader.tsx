import Link from "next/link";
import type { NavFooterT } from "@/lib/translations";

const LOGO_SRC = "https://img.virax.ai/admin_images/1770014352602_vlogo.png";
const VIRAX_URL = "https://www.virax.ai/";

type SiteHeaderProps = {
  t: NavFooterT;
};

export function SiteHeader({ t }: SiteHeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label={t.aria.navVirax}>
            <img
              src={LOGO_SRC}
              alt="Veo 3.2 Logo"
              width={36}
              height={36}
              className="h-9 w-auto select-none drop-shadow-[0_0_18px_rgba(168,85,247,0.8)]"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/blog"
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            Blog
          </Link>
          <a
            href={VIRAX_URL}
            className="bg-white text-slate-900 hover:bg-white/90 text-sm font-bold px-6 py-2.5 rounded-lg transition-all transform hover:scale-105 shadow-[0_0_18px_rgba(148,163,184,0.45)]"
          >
            {t.nav.getStarted}
          </a>
        </div>
      </div>
    </header>
  );
}
