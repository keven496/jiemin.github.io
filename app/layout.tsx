import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: "Jie Min — Mathematics",
    template: "%s — Jie Min",
  },
  description:
    "Academic website of Jie Min, Assistant Professor at HIMIS, working in low-dimensional and symplectic topology.",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
  openGraph: {
    title: "Jie Min — Mathematics",
    description:
      "Academic website of Jie Min, working in low-dimensional and symplectic topology.",
    type: "website",
    images: [
      {
        url: "/og.png",
        alt: "Jie Min — Low-dimensional and symplectic topology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jie Min — Mathematics",
    description:
      "Academic website of Jie Min, working in low-dimensional and symplectic topology.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="mathjax-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.MathJax = {
                tex: {
                  inlineMath: [["$", "$"], ["\\\\(", "\\\\)"]],
                  displayMath: [["$$", "$$"], ["\\\\[", "\\\\]"]],
                  processEscapes: true
                },
                options: {
                  skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"]
                }
              };
            `,
          }}
        />
        <Script
          id="mathjax"
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
