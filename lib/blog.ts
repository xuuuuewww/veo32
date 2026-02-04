import { readdir, readFile } from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

const BLOG_DIR = join(process.cwd(), "content", "blog");

export type PostMeta = {
  title: string;
  date: string; // YYYY-MM-DD
  description?: string;
  tags?: string[];
  cover?: string;
};

export type Post = {
  slug: string;
  meta: PostMeta;
  contentHtml: string;
};

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "");
}

/**
 * Scan content/blog for all .md files, return slug list.
 */
export async function getAllSlugs(): Promise<string[]> {
  try {
    const files = await readdir(BLOG_DIR);
    return files
      .filter((f) => f.endsWith(".md"))
      .map((f) => getSlugFromFilename(f));
  } catch {
    return [];
  }
}

/**
 * Read all posts' front matter for list page, sorted by date desc.
 */
export async function getAllPostsMeta(): Promise<{ slug: string; meta: PostMeta }[]> {
  const slugs = await getAllSlugs();
  const posts: { slug: string; meta: PostMeta }[] = [];
  for (const slug of slugs) {
    const post = await getPostBySlug(slug);
    if (post) posts.push({ slug: post.slug, meta: post.meta });
  }
  posts.sort((a, b) => (b.meta.date > a.meta.date ? 1 : -1));
  return posts;
}

/**
 * Render markdown to HTML (content from repo only; no user input → no sanitize).
 */
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(markdown);
  return String(result);
}

/**
 * Read single post by slug. Returns null if file not found (for notFound()).
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "");
  if (safeSlug !== slug) return null;
  const path = join(BLOG_DIR, `${slug}.md`);
  try {
    const raw = await readFile(path, "utf-8");
    const { data, content } = matter(raw);
    if (!data.title || !data.date) return null;
    const meta: PostMeta = {
      title: String(data.title),
      date: String(data.date),
      description: data.description != null ? String(data.description) : undefined,
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
      cover: data.cover != null ? String(data.cover) : undefined,
    };
    const contentHtml = await markdownToHtml(content);
    return { slug, meta, contentHtml };
  } catch {
    return null;
  }
}
