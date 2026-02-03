"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/translations";
import { localeConfig } from "@/lib/translations";

type LanguageSwitcherProps = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = localeConfig.find((c) => c.code === currentLocale) ?? localeConfig[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 hover:text-white/40 text-white/20 text-xs transition-colors cursor-pointer min-h-[44px] min-w-[44px]"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
      >
        <span className="material-symbols-outlined text-base" aria-hidden>
          language
        </span>
        <span>{current.label}</span>
        <span className="material-symbols-outlined text-sm transition-transform" style={{ transform: open ? "rotate(180deg)" : undefined }} aria-hidden>
          expand_more
        </span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute bottom-full left-0 mb-2 py-2 rounded-xl border border-white/10 bg-slate-900/95 backdrop-blur shadow-xl min-w-[140px] z-50"
          aria-label="Language options"
        >
          {localeConfig.map((item) => (
            <li key={item.code} role="option" aria-selected={item.code === currentLocale}>
              <Link
                href={item.path}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  item.code === currentLocale ? "text-primary bg-primary/10" : "text-white/80 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
