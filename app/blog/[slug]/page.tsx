import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { BASE_URL } from "@/lib/site";
import { BlogTableOfContents } from "@/components/BlogTableOfContents";
import { PageWithNav } from "@/components/PageWithNav";
import type { Metadata } from "next";

const DEFAULT_OG_IMAGE = "https://img.virax.ai/admin_images/1770014352602_vlogo.png";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  const url = `${BASE_URL}/blog/${slug}`;
  const image = post.meta.cover ?? DEFAULT_OG_IMAGE;
  const description = post.meta.description ?? post.meta.title;

  return {
    title: post.meta.title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.meta.title,
      description,
      url,
      type: "article",
      publishedTime: post.meta.date,
      images: [{ url: image, width: 1200, height: 630, alt: post.meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description,
      images: [image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const url = `${BASE_URL}/blog/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description ?? post.meta.title,
    datePublished: post.meta.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    publisher: {
      "@type": "Organization",
      name: "Veo32",
      url: BASE_URL,
    },
    author: { "@type": "Organization", name: "Veo32" },
    ...(post.meta.cover && { image: post.meta.cover }),
  };

  return (
    <PageWithNav>
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Fixed "← Blog" bar: reserve space so title doesn't sit under it */}
        <div className="h-14 shrink-0" aria-hidden="true" />
        <nav
          className="fixed z-10 top-28 left-0 right-0 flex justify-center pointer-events-none"
          aria-label="Back to blog"
        >
          <div className="w-full max-w-6xl px-6 pointer-events-auto">
            <Link
              href="/blog"
              className="text-white/60 hover:text-white text-sm transition-colors inline-block"
            >
              ← Blog
            </Link>
          </div>
        </nav>
        <div className="flex gap-12 items-start">
          {/* Spacer for fixed TOC so article doesn't overlap */}
          <div className="w-56 shrink-0 hidden lg:block" aria-hidden="true" />
          <BlogTableOfContents />
          <article className="min-w-0 flex-1">
            <header className="mb-8">
              <h1 className="text-3xl font-bold mb-2">{post.meta.title}</h1>
              <time
                dateTime={post.meta.date}
                className="text-white/50 text-sm block"
              >
                {post.meta.date}
              </time>
              {post.meta.tags && post.meta.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>
            <div
              data-blog-article
              className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-a:text-primary prose-a:no-underline hover:prose-a:underline [&_table]:w-full [&_table]:overflow-x-auto [&_table]:border-collapse [&_table]:border [&_table]:border-white/20 [&_th]:border [&_th]:border-white/20 [&_th]:p-3 [&_th]:bg-white/10 [&_td]:border [&_td]:border-white/20 [&_td]:p-3"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </article>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </PageWithNav>
  );
}
