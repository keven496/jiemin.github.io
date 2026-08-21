import type { Metadata } from "next";
import { SiteShell } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "Toric FOOO learning seminar",
  description: "Toric FOOO learning seminar organized in Spring 2020.",
};

const introReferences = [
  "Auroux, A beginner’s introduction to Fukaya category",
  "Smith, A symplectic prolegomenon",
];

const toricReferences = [
  "[TFOOO1] Lagrangian Floer theory on compact toric manifolds I",
  "[TFOOO2] Lagrangian Floer theory on compact toric manifolds II: bulk deformation",
  "[TFOOO survey] Lagrangian Floer theory on compact toric manifolds: survey",
  "[big FOOO1] Lagrangian Intersection Floer Theory: Anomaly and Obstruction, Part I",
  "[Ohta] Obstruction to and Deformation of Lagrangian intersection Floer cohomology",
];

const applicationReferences = [
  "[toric degeneration] Toric degeneration and non-displaceable Lagrangian tori in $S^2 \\times S^2$",
  "[Wu] On an exotic Lagrangian torus in $\\mathbb{CP}^2$",
  "[Mak–Smith] Non-displaceable Lagrangian links in four-manifolds",
  "[Sun] $A_n$-type surface singularity and nondisplaceable Lagrangian tori",
];

const schedule = [
  "4-25 — Jie Min: Intro to Lagrangian Floer cohomology 1",
  "5-2 — Jie Min: Intro to Lagrangian Floer cohomology 2",
  "5-9 — Shuo Zhang: Gromov compactness and bubbling",
  "5-16 — Liya Ouyang: $A_\\infty$ algebra and deformation; Jie Min: Canonical model",
  "5-23 — Shengzhen Ning: Toric manifolds",
  "5-30 — Jie Min: Calculation of potential function",
  "6-6 — Jie Min: Toric degeneration and gluing",
];

export default function ToricFoooPage() {
  return (
    <SiteShell active="seminars">
      <article className="content-page narrow-page">
        <header className="page-heading">
          <p className="eyebrow">Spring 2020</p>
          <h1>Toric FOOO learning seminar</h1>
        </header>

        <p className="lead">
          The goal is to understand the use of toric degeneration and bulk
          deformation in the study of nondisplaceability of Lagrangian tori.
        </p>

        <section>
          <h2>References</h2>
          <h3>Introduction to Lagrangian Floer theory</h3>
          <ul className="dense-list">
            {introReferences.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
            <li>
              Pascaleff&apos;s{" "}
              <a href="https://www.google.com/search?q=Pascaleff+lecture+notes+Lagrangian+Floer">
                lecture notes
              </a>
            </li>
          </ul>

          <h3>Toric FOOO</h3>
          <ul className="dense-list">
            {toricReferences.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
          </ul>

          <h3>Applications to Lagrangian tori</h3>
          <ul className="dense-list">
            {applicationReferences.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Schedule</h2>
          <ul className="schedule-list">
            {schedule.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>
    </SiteShell>
  );
}
