import type { Metadata } from "next";
import { SiteShell } from "../../components/SiteShell";

export const metadata: Metadata = {
  title: "Symplectic cohomology learning seminar",
  description:
    "References and topics from the 2020–2021 symplectic cohomology learning seminar.",
};

const springReferences = [
  "[SS] Seidel–Solomon, q-intersection numbers",
  "[M] McLean, Lefschetz fibration and symplectic homology",
  "[M1] McLean, Growth rate of symplectic homology and affine varieties",
  "[M2] McLean, Affine Varieties, Singularities and the Growth Rate of Wrapped Floer Cohomology",
  "McLean–Ritter, McKay correspondence via Floer theory",
  "[GP1] Ganatra–Pomerleano, log PSS and applications to Lagrangian embeddings",
  "[GP2] Ganatra–Pomerleano, Symplectic cohomology rings of affine varieties in the topological limit",
  "[GH] Gutt–Hutchings, Symplectic capacities from positive $S^1$-equivariant symplectic homology",
  "[Si1] Siegel, Higher symplectic capacity",
  "[Si2] Siegel, Squared Dehn twists and deformed symplectic invariants",
  "[Zh] Zhou, ADC manifolds I, II",
  "Lazarev, Flexible filling",
  "Li, Exact CY categories",
  "[GU] Gutt–Usher, Codimension 0 embedding",
  "[DS] Diogo–Lisi, SH of complement of smooth divisor",
  "Ganatra–Siegel, Embedding complexity of Liouville",
  "[AS] Abouzaid–Seidel, Altering symplectic manifolds by homologous recombinations",
  "[BEE] Bourgeois–Ekholm–Eliashberg, Effects of Legendrian surgery",
];

const fallReferences = [
  "[A] Abouzaid, Symplectic cohomology and Viterbo’s theorem",
  "[Sal] Salamon, Lectures on Floer homology",
  "[S] Seidel, A biased view of symplectic cohomology",
  "[O] Oancea, A survey of Floer homology for manifolds with contact type boundary or Symplectic homology",
  "[W] Wendl, A beginner’s overview of symplectic homology",
  "[AD] Audin–Damian, Morse Theory and Floer homology",
  "[BC] Barraud–Cornea, Lagrangian intersection and Serre spectral sequence",
  "[FH] Floer–Hofer, Coherent orientations for periodic orbit problems in symplectic geometry",
  "[loop] Free Loop Spaces in Geometry and Topology",
];

export default function SymplecticCohomologyPage() {
  return (
    <SiteShell active="seminars">
      <article className="content-page narrow-page">
        <header className="page-heading">
          <p className="eyebrow">Fall 2020 &amp; Spring 2021</p>
          <h1>Symplectic cohomology learning seminar</h1>
        </header>

        <p>
          In Fall 2020, the seminar was organized to understand symplectic
          cohomology and its relation to loop homology.
        </p>
        <p>
          In Spring 2021, we explored further applications and constructions
          related to symplectic cohomology.
        </p>
        <p>
          The seminar was held online via Zoom. For questions about the archive,
          please write to minxx127[at]umn[dot]edu.
        </p>

        <section>
          <h2>Spring 2021: further topics</h2>
          <h3>References</h3>
          <ul className="dense-list bibliography">
            {springReferences.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Fall 2020: symplectic homology and loop homology</h2>
          <h3>References</h3>
          <ul className="dense-list bibliography">
            {fallReferences.map((reference) => (
              <li key={reference}>{reference}</li>
            ))}
          </ul>
        </section>
      </article>
    </SiteShell>
  );
}
