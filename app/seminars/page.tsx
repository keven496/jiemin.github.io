import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Seminars",
  description: "Seminars organized and co-organized by Jie Min.",
};

export default function SeminarsPage() {
  return (
    <SiteShell active="seminars">
      <article className="content-page narrow-page">
        <header className="page-heading">
          <p className="eyebrow">Community</p>
          <h1>Seminars</h1>
        </header>

        <section>
          <h2>University of Massachusetts Amherst</h2>
          <p>
            Fall 2022 – now, I co-organize the{" "}
            <a href="https://www.umass.edu/mathematics-statistics/seminars/geometry-and-topology-seminar">
              Geometry and Topology seminar
            </a>
            .
          </p>
          <p>
            Fall 2023 – Spring 2024, I co-organized the{" "}
            <a href="https://www.umass.edu/mathematics-statistics/seminars/reading-seminar-on-automorphism-groups-of-manifolds">
              Reading Seminar on Automorphism Groups of Manifolds
            </a>
            .
          </p>
        </section>

        <section>
          <h2>UMN Student Symplectic Seminar</h2>
          <p>
            Fall 2017 – Spring 2021, I organized the Student Symplectic Seminar
            at University of Minnesota.
          </p>
          <p>
            In Fall 2020 and Spring 2021, we had an online{" "}
            <Link href="/seminars/symplectic-cohomology/">
              symplectic cohomology learning seminar
            </Link>
            . In Spring 2020, we had an online learning seminar on{" "}
            <Link href="/seminars/toric-fooo/">Toric FOOO</Link>.
          </p>
        </section>

        <section>
          <h2>Resources</h2>
          <p>
            For a list of online seminars, see{" "}
            <a href="https://mathseminars.org/">MathSeminars</a>. For a list of
            topics from past student seminars, see the{" "}
            <a href="https://drive.google.com/file/d/1DnlzcagjDC_cC010VYiVHkAo--6oVkca/view?usp=sharing">
              seminar archive file
            </a>
            .
          </p>
        </section>
      </article>
    </SiteShell>
  );
}
