import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export type PostSummary = {
  slug: string;
  title: string;
  date: string;
  description: string;
};

export type Post = PostSummary & {
  html: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");

function readPostFile(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (!data.title || !data.date || !data.description) {
    throw new Error(
      `Post ${slug}.md must include title, date, and description in its front matter.`,
    );
  }

  return {
    content,
    summary: {
      slug,
      title: String(data.title),
      date: String(data.date),
      description: String(data.description),
    } satisfies PostSummary,
  };
}

export function getAllPosts(): PostSummary[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => readPostFile(fileName.replace(/\.md$/, "")).summary)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<Post> {
  const { content, summary } = readPostFile(slug);
  const rendered = await remark().use(remarkHtml).process(content);

  return {
    ...summary,
    html: rendered.toString(),
  };
}

export function formatPostDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
