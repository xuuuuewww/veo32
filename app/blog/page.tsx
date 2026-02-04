import Link from "next/link";
import { BASE_URL } from "@/lib/site";
import { getAllPostsMeta } from "@/lib/blog";
import { PageWithNav } from "@/components/PageWithNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources of Veo",
  description: "Find everything about Veo 3 here.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Resources of Veo",
    description: "Find everything about Veo 3 here.",
    url: `${BASE_URL}/blog`,
    type: "website",
  },
};

export default async function BlogListPage() {
  const posts = await getAllPostsMeta();

  return (
    <PageWithNav>
      <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-3xl font-bold mb-2">Resources of Veo</h1>
          <p className="text-white/60 mb-10">Find everything about Veo 3 here.</p>
          <ul className="space-y-6">
          {posts.length === 0 ? (
            <li className="text-white/50">No posts yet.</li>
          ) : (
            posts.map(({ slug, meta }) => (
              <li key={slug}>
                <article>
                  <Link
                    href={`/blog/${slug}`}
                    className="block group"
                  >
                    <h2 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                      {meta.title}
                    </h2>
                    {meta.description && (
                      <p className="text-white/60 text-sm mt-1 line-clamp-2">
                        {meta.description}
                      </p>
                    )}
                    <time
                      dateTime={meta.date}
                      className="text-white/40 text-xs mt-2 block"
                    >
                      {meta.date}
                    </time>
                    {meta.tags && meta.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {meta.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                </article>
              </li>
            ))
          )}
          </ul>
      </div>
    </PageWithNav>
  );
}
