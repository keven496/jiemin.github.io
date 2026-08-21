import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "../../components/SiteShell";
import {
  formatPostDate,
  getAllPosts,
  getPost,
} from "../../../lib/posts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const summary = getAllPosts().find((post) => post.slug === slug);

  if (!summary) return {};

  return {
    title: summary.title,
    description: summary.description,
    openGraph: {
      title: summary.title,
      description: summary.description,
      type: "article",
      images: [],
    },
    twitter: {
      card: "summary",
      title: summary.title,
      description: summary.description,
      images: [],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const summary = getAllPosts().find((post) => post.slug === slug);

  if (!summary) notFound();

  const post = await getPost(slug);

  return (
    <SiteShell active="posts">
      <article className="post-page">
        <Link className="back-link" href="/posts/">
          <span aria-hidden="true">←</span> All posts
        </Link>
        <header className="post-header">
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
        </header>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </SiteShell>
  );
}
