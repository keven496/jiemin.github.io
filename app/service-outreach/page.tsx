import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Service & Outreach",
  description: "Academic service, mentoring, and outreach by Jie Min.",
};

export default function ServiceOutreachPage() {
  return (
    <SiteShell active="service">
      <article className="content-page narrow-page">
        <header className="page-heading">
          <p className="eyebrow">Community</p>
          <h1>Service &amp; Outreach</h1>
        </header>

        <section>
          <h2>Organized seminars and conferences</h2>
          <ul className="dense-list">
            <li>
              <a href="https://www.umass.edu/mathematics-statistics/seminars/geometry-and-topology-seminar">
                Geometry Topology seminar
              </a>
              , UMass Amherst
            </li>
            <li>
              <a href="https://www.umass.edu/mathematics-statistics/seminars/reading-seminar-on-automorphism-groups-of-manifolds">
                Reading Seminar on Automorphism Group of Manifolds
              </a>
              , UMass Amherst
            </li>
            <li>
              <a href="https://sites.google.com/view/low-dimensionaltopologyandsymp/home">
                Low dimensional topology and symplectic geometry weekend
              </a>
              , online, May 7–9, 2021
            </li>
            <li>
              <Link href="/seminars/symplectic-cohomology/">
                Symplectic cohomology learning seminar
              </Link>
              , University of Minnesota, Fall 2020 and Spring 2021
            </li>
            <li>
              <Link href="/seminars/toric-fooo/">
                Toric FOOO learning seminar
              </Link>
              , University of Minnesota, Spring 2020
            </li>
            <li>
              Student Symplectic Geometry Seminar, University of Minnesota,
              2017–2020
            </li>
            <li>
              IMS Student Topology Seminar, Chinese University of Hong Kong,
              2013 and 2014
            </li>
          </ul>
        </section>

        <section>
          <h2>Mentored directed reading program</h2>
          <ul className="dense-list">
            <li>Nicholas Robino, Topology and fundamental groups, Spring 2021</li>
            <li>Nicolas Holt, Riemann surfaces, Spring 2020</li>
            <li>Minyoung Jeong, Functional analysis, Fall 2019</li>
            <li>
              David Ibarra, Introduction to topological manifolds, Spring 2019
            </li>
            <li>Bernardo, Introduction to smooth manifolds, Fall 2018</li>
          </ul>
        </section>

        <section>
          <h2>Other service</h2>
          <ul className="service-list">
            <li>
              <strong>Anti-racism committee</strong>
              <span>University of Massachusetts Amherst, 2024</span>
            </li>
            <li>
              <strong>Counselor, Mathematics Project at Minnesota</strong>
              <span>University of Minnesota, Jan 2021</span>
              <p>Mentored undergraduate students reading papers and giving talks.</p>
            </li>
            <li>
              <strong>Instructor, CSE TALK program</strong>
              <span>University of Minnesota, summers 2017–2019</span>
              <p>
                Helped new international graduate students teach in an American
                classroom environment.
              </p>
            </li>
            <li>
              <strong>Tutor, Enrichment program for young mathematics talents</strong>
              <span>Chinese University of Hong Kong, summer 2012</span>
              <p>
                Taught complex numbers and hyperbolic geometry to mathematically
                talented high school students.
              </p>
            </li>
            <li>
              <strong>Vice President, 3Heart Club</strong>
              <span>Chinese University of Hong Kong, 2009–2010</span>
              <p>Organized volunteer teaching programs in rural areas in China.</p>
            </li>
          </ul>
        </section>
      </article>
    </SiteShell>
  );
}
