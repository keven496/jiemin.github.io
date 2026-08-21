import type { ReactNode } from "react";
import Link from "next/link";

type Section =
  | "home"
  | "research"
  | "seminars"
  | "service"
  | "about"
  | "posts";

const navItems: Array<{ key: Section; href: string; label: string }> = [
  { key: "home", href: "/", label: "Home" },
  { key: "research", href: "/research/", label: "Research" },
  { key: "seminars", href: "/seminars/", label: "Seminars" },
  { key: "service", href: "/service-outreach/", label: "Service & Outreach" },
  { key: "about", href: "/about/", label: "About Me" },
  { key: "posts", href: "/posts/", label: "Posts" },
];

export function SiteShell({
  active,
  children,
}: {
  active: Section;
  children: ReactNode;
}) {
  return (
    <div className="site-frame">
      <header className="site-header">
        <Link className="site-title" href="/" aria-label="Jie Min, home">
          Jie Min
        </Link>
        <p>Low-dimensional &amp; symplectic topology</p>
      </header>

      <div className="site-layout">
        <aside className="site-sidebar">
          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    aria-current={active === item.key ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  {item.key === "seminars" ? (
                    <ul className="subnav">
                      <li>
                        <Link href="/seminars/toric-fooo/">Toric FOOO</Link>
                      </li>
                      <li>
                        <Link href="/seminars/symplectic-cohomology/">
                          Symplectic cohomology
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="site-main">{children}</main>
      </div>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Jie Min</p>
      </footer>
    </div>
  );
}
