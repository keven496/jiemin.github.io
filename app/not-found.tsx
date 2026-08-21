import Link from "next/link";
import { SiteShell } from "./components/SiteShell";

export default function NotFound() {
  return (
    <SiteShell active="home">
      <article className="content-page narrow-page">
        <header className="page-heading">
          <p className="eyebrow">404</p>
          <h1>Page not found</h1>
        </header>
        <p>The page you were looking for is not part of this site.</p>
        <p>
          <Link href="/">Return home</Link>
        </p>
      </article>
    </SiteShell>
  );
}
