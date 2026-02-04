"use client";

import { useEffect, useState } from "react";

const ARTICLE_SELECTOR = "[data-blog-article]";

type HeadingItem = { level: number; text: string; id: string };

export function BlogTableOfContents() {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);

  useEffect(() => {
    const article = document.querySelector(ARTICLE_SELECTOR);
    if (!article) return;
    const nodes = article.querySelectorAll("h2");
    const items: HeadingItem[] = [];
    nodes.forEach((el) => {
      const id = el.id;
      if (id) items.push({ level: 2, text: el.textContent?.trim() ?? "", id });
    });
    setHeadings(items);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav
      className="sticky top-24 w-56 shrink-0 hidden lg:block"
      aria-label="Article contents"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
        Contents
      </p>
      <ul className="space-y-1.5 border-l border-white/10 pl-4">
        {headings.map(({ id, text }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="block text-sm text-white/60 hover:text-white transition-colors py-1 border-l-2 border-transparent -ml-[18px] pl-4 hover:border-primary/60 focus:outline-none focus-visible:border-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
