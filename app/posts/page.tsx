import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { formatPostDate, getAllPosts } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Posts",
  description: "Notes and posts by Jie Min, with support for LaTeX mathematics.",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <SiteShell active="posts">
      <article className="content-page narrow-page">
        <header className="page-heading">
          <p className="eyebrow">Notes</p>
          <h1>Posts</h1>
          <p className="lead">
            Short notes, announcements, and mathematical writing. LaTeX is
            rendered directly in each post.
          </p>
        </header>

        {posts.length ? (
          <ol className="post-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <h2>
                  <Link href={`/posts/${post.slug}/`}>{post.title}</Link>
                </h2>
                <p>{post.description}</p>
                <Link className="read-more" href={`/posts/${post.slug}/`}>
                  Read post <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <p>No posts yet.</p>
        )}
      </article>
    </SiteShell>
  );
}
