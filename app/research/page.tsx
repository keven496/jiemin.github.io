import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";
import { PublicationWithAbstract } from "./PublicationWithAbstract";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research, publications, preprints, and talks by Jie Min in low-dimensional and symplectic topology.",
};

const researchTalks = [
  "Workshop on topology and applications, HIMIS, Jan 2026",
  "Shanghai Tech University, Dec 2025",
  "Zhejiang University, Dec 2025",
  "AMSS, Dec 2025",
  "Xiamen University, Nov 2025",
  "Shanghai Jiaotong University, Sep 2025",
  "Vanishing cycles and almost toric fibrations, GaTech, Mar 2025",
  "Symplectic log Calabi–Yau pairs and almost toric fibrations, AMS Sectional meeting, Mar 2025",
  "Almost complex geometry and almost toric fibrations of symplectic log Calabi–Yau pairs, MIT, Dec 2024",
  "Symplectic log Calabi–Yau pairs and almost toric fibrations, GT GAPS, Nov 2024",
  "Contact cut graph and Weinstein L-invariant, Arizona State University, Oct 2024",
  "Contact cut graph and Weinstein L-invariant, University of Minnesota, Oct 2024",
  "Contact cut graph and Weinstein L-invariant, University of Massachusetts Amherst, Sept 2024",
  "Circular spherical divisors and contact topology, AMS sectional meeting, Cincinnati, April 2023",
  "Moduli space of symplectic log Calabi–Yau divisors and torus fibrations, Fields Institute, Jan 2023",
  "Moduli space of symplectic log Calabi–Yau divisors and torus fibrations, 2nd Youth Forum, IGP USTC, Dec 2022",
  "Moduli space of symplectic log Calabi–Yau divisors and torus fibrations, University of Massachusetts Amherst, Sep 2022",
  "Symplectic log Calabi–Yau divisors and almost torus fibrations, University of Arkansas, Mar 2022",
  "Symplectic divisors in dimension 4, Oberseminar, MPIM, Nov 2021",
  "Moduli space of symplectic log Calabi–Yau divisors and torus fibrations, Freemath Seminar, Oct 2021",
  "Moduli space of symplectic log Calabi–Yau divisors and torus fibrations, University of Minnesota, Oct 2021",
  "Circular spherical divisors and contact topology, Shanghai Jiaotong University, July 2021",
  "Symplectic log Calabi–Yau surfaces — contact aspects, AMS sectional meeting, Purdue, April 2020",
  "Graphs and symplectic capping, MAA North Central Sectional Meeting, Oct 2019",
];

const expositoryTalks = [
  "Thurston’s classification of surface diffeomorphisms, Reading seminar, UMass Amherst, 2024",
  "What is a symplectic cobordism, TWIGS, University of Massachusetts Amherst, Sep 2022",
  "Introduction to Fukaya categories, MPIM topology seminar, Jan 2022",
  "Symplectic birational geometry (short talk), MPIM topology seminar, Nov 2021",
  "Symplectic fillings of ADC manifolds, UMN Student symplectic seminar, April 2021",
  "Growth rate of symplectic cohomology, UMN Student symplectic seminar, Feb 2021",
  "Immersed Lagrangian sphere and SYZ mirror symmetry for Grassmannians, Symplectic cut seminar, KCL, Nov 2020 (online)",
  "Simple homotopy equivalence of nearby Lagrangians, Symplectic cut seminar, KCL, July 2020 (online)",
  "Wall crossing in SYZ mirror symmetry, Symplectic zoom learning seminar, July 2020 (online)",
  "Toric degeneration and potential function in $S^2 \\times S^2$, UMN Student symplectic seminar, June 2020",
  "Symplectic fillings of simple singularities, UMN Student symplectic seminar, Nov 2019",
  "Symplectic fillings of Seifert fibered spaces, UMN Student symplectic seminar, Sep 2018",
  "Lecture Series on Fukaya category, UMN Student symplectic seminar, Spring 2018",
  "Symplectic Kodaira Dimension 0, Kylerec student workshop on symplectic geometry, Truckee, May 2017",
];

const talkMaterials: Record<string, { href: string; label: string }> = {
  "Moduli space of symplectic log Calabi–Yau divisors and torus fibrations, Fields Institute, Jan 2023": {
    href: "https://www.youtube.com/watch?t=21s&v=uY_rm8t7q8A",
    label: "video",
  },
  "Moduli space of symplectic log Calabi–Yau divisors and torus fibrations, Freemath Seminar, Oct 2021": {
    href: "https://bbb.ma.ic.ac.uk/playback/presentation/2.3/4e9d117a58d311881369c485c4db42e9dd4eef77-1635255616943",
    label: "video",
  },
  "Symplectic log Calabi–Yau surfaces — contact aspects, AMS sectional meeting, Purdue, April 2020": {
    href: "https://drive.google.com/open?id=1vnXFveTXvOwljhS_6YPTYCMh18wKc-KX",
    label: "slides",
  },
  "Graphs and symplectic capping, MAA North Central Sectional Meeting, Oct 2019": {
    href: "https://drive.google.com/open?id=12cgdR4zrKRiAmvYIU1FlFgKadxyKaD4C",
    label: "slides",
  },
  "Immersed Lagrangian sphere and SYZ mirror symmetry for Grassmannians, Symplectic cut seminar, KCL, Nov 2020 (online)": {
    href: "https://drive.google.com/file/d/10SnFNmSAZj58XHQd98cdHEfuFpSW5yyp/view?usp=sharing",
    label: "slides",
  },
};

export default function ResearchPage() {
  return (
    <SiteShell active="research">
      <article className="content-page">
        <header className="page-heading">
          <p className="eyebrow">Mathematics</p>
          <h1>Research</h1>
        </header>

        <p className="lead">
          My research interest lies in low dimensional topology and symplectic
          topology. In particular I am interested in symplectic normal crossing
          divisors and their applications to symplectic topology, for instance
          symplectic fillings, contact structures, Hamiltonian torus actions,
          etc. Recently, I have also been thinking about symplectic cohomology
          and birational geometry of affine varieties.
        </p>

        <section>
          <h2>
            Papers and preprints{" "}
            <span className="heading-links">
              (<a href="https://arxiv.org/a/min_j_1.html">arXiv</a>,{" "}
              <a href="https://scholar.google.com/citations?hl=en&amp;user=Ni5prj8AAAAJ">
                Google Scholar
              </a>)
            </span>
          </h2>

          <ol className="publication-list" reversed start={6}>
            <li>
              <PublicationWithAbstract
                title="The contact cut graph and a Weinstein L-invariant"
                citation={
                  <>
                    (with Nick Castro, Gabe Islambouli, Sumeyra Sakalli, Laura
                    Starkston and Angela Wu). <em>Trans. Lond. Math. Soc.</em> 12,
                    Article ID e70020, 36 p. (2025).{" "}
                    <a href="https://londmathsoc.onlinelibrary.wiley.com/doi/10.1112/tlm3.70020">
                      Journal
                    </a>
                    ,{" "}
                    <a href="https://arxiv.org/abs/2408.05340">
                      arXiv:2408.05340
                    </a>
                  </>
                }
                abstract={
                  <>
                    We define and study the contact cut graph which is an analogue
                    of Hatcher and Thurston&apos;s cut graph for contact geometry,
                    inspired by contact Heegaard splittings. We show how oriented
                    paths in the contact cut graph correspond to Lefschetz
                    fibrations and multisection with divides diagrams. We also
                    give a correspondence for achiral Lefschetz fibrations. We
                    use these correspondences to define a new invariant of
                    Weinstein domains, the Weinstein L-invariant, that is a
                    symplectic analogue of the Kirby-Thompson&apos;s L-invariant of
                    smooth 4-manifolds. We discuss the relation of Lefschetz
                    stabilization with the Weinstein L-invariant. We present
                    topological and geometric constraints of Weinstein domains
                    with L=0. We also give two families of examples of
                    multisections with divides that have arbitrarily large
                    L-invariant.
                  </>
                }
              />
            </li>

            <li>
              <PublicationWithAbstract
                title="Almost complex geometry of symplectic log Calabi–Yau pairs with applications to almost toric fibrations"
                citation={
                  <>
                    (with{" "}
                    <a href="https://sites.google.com/view/shengzhenning/home">
                      Shengzhen Ning
                    </a>
                    ). To appear in <em>Contemporary Mathematics</em>.{" "}
                    <a href="https://www.dropbox.com/scl/fi/jta0zwe9dwpzyny35m9p0/Almost_complex_LCY.pdf?dl=0&amp;rlkey=twx8zglu6h8e877hksxrnvd6y">
                      Preprint
                    </a>
                    .
                  </>
                }
                abstract={
                  <>
                    Given a symplectic log Calabi–Yau pair, we study the almost
                    complex structures that are adapted to it. For these almost
                    complex structures, we study the behavior of the curve cone,
                    prove a Nakai-Moishezon criterion and describe the almost
                    Kähler cone for the generic ones. As an application, we prove
                    a decomposition theorem for Seiberg-Witten non-trivial
                    classes. This leads to an alternative proof of the existence
                    of almost toric fibrations on $c_1$-positive rational surfaces
                    shown in [5].
                  </>
                }
              />
            </li>

            <li>
              <PublicationWithAbstract
                title="Almost toric presentations of symplectic log Calabi–Yau pairs"
                citation={
                  <>
                    (with Tian-Jun Li and Shengzhen Ning). Submitted.{" "}
                    <a href="https://arxiv.org/abs/2303.09964">
                      arXiv:2303.09964
                    </a>
                  </>
                }
                abstract={
                  <>
                    We show that any symplectic log Calabi–Yau divisor can be
                    realized as the boundary divisor of an almost toric
                    fibration. This realization is canonical once we choose an
                    extra data called the framing on the space of LCY. This is
                    achieved by considering the symplectic analogue of the toric
                    model used in the algebraic geometrical settings.
                  </>
                }
              />
            </li>

            <li>
              <PublicationWithAbstract
                title="Enumerative aspect of symplectic log Calabi–Yau divisors and almost toric fibrations"
                citation={
                  <>
                    (with Tian-Jun Li and Shengzhen Ning).{" "}
                    <em>Israel J. Math.</em> (2025).{" "}
                    <a href="https://link.springer.com/article/10.1007/s11856-025-2843-x">
                      Journal
                    </a>
                    ,{" "}
                    <a href="https://arxiv.org/abs/2203.08544">
                      arXiv:2203.08544
                    </a>
                  </>
                }
                abstract={
                  <>
                    We are interested in the isotopy classes of symplectic log
                    Calabi–Yau divisors in a fixed symplectic rational surface.
                    We give several equivalent definitions and prove the
                    stability, finiteness and rigidity results. Motivated by the
                    problem of counting toric actions, we obtain a general
                    counting formula of symplectic log Calabi–Yau divisors in a
                    restrictive region of the c1-nef cone. A detailed count in
                    the case of 2- and 3-point blow-ups of complex projective
                    space for all symplectic forms is also given. In our framework
                    the complexity of the combinatorics of analyzing Delzant
                    polygons is reduced to the arrangement of homology classes.
                    Then we study its relation with almost toric fibrations. We
                    raise the problem of realizing all symplectic log Calabi–Yau
                    divisors by some almost toric fibrations and verify it together
                    with another conjecture of Symington in a special region.
                  </>
                }
              />
            </li>

            <li>
              <PublicationWithAbstract
                title="Circular spherical divisors and their contact topology"
                citation={
                  <>
                    (with Tian-Jun Li and Cheuk Yu Mak).{" "}
                    <em>Communications in Analysis and Geometry</em>, Vol. 31,
                    No. 10 (2023).{" "}
                    <a href="https://arxiv.org/abs/2002.10504">
                      arXiv:2002.10504
                    </a>
                  </>
                }
                abstract={
                  <>
                    This paper investigates the symplectic and contact topology
                    associated to circular spherical divisors. We classify, up
                    to toric equivalence, all concave circular spherical divisors
                    D that can be embedded symplectically into a closed symplectic
                    4-manifold and show they are all realized as symplectic log
                    Calabi–Yau pairs if their complements are minimal. We then
                    determine the Stein fillability and rational homology type of
                    all minimal symplectic fillings for the boundary torus bundles
                    of such D. When D is anticanonical and convex, we give explicit
                    Betti number bounds for Stein fillings of its boundary contact
                    torus bundle.
                  </>
                }
              />
            </li>

            <li>
              <PublicationWithAbstract
                title="Local geometry of symplectic divisors with applications to contact torus bundles"
                citation={
                  <>
                    (with Tian-Jun Li). <em>Proceedings of ICCM 2019</em>,
                    International Press, 1507–1532 (2024).{" "}
                    <a href="https://arxiv.org/abs/2101.05981">
                      arXiv:2101.05981
                    </a>
                  </>
                }
                abstract={
                  <>
                    In this note we study the contact geometry of symplectic
                    divisors. We show the contact structure induced on the
                    boundary of a divisor neighborhood is invariant under toric
                    and interior blow-ups and blow-downs. We also construct an
                    open book decomposition on the boundary of a concave divisor
                    neighborhood and apply it to the study of universally tight
                    contact structures of contact torus bundles.
                  </>
                }
              />
            </li>

            <li>
              <PublicationWithAbstract
                title="Symplectic divisors in dimension four."
                citation={
                  <>
                    PhD Thesis.{" "}
                    <a href="https://conservancy.umn.edu/bitstreams/ebc18009-0481-4b64-a692-e580b2fb9e33/download">
                      Thesis PDF
                    </a>
                  </>
                }
                abstract={
                  <>
                    This thesis contains mostly preliminary results from papers
                    [1], [2] and [3] above, together with additional material on
                    achiral Lefschetz fibrations.
                  </>
                }
              />
            </li>
          </ol>
        </section>

        <section>
          <h2>Work in progress</h2>
          <ul className="dense-list">
            <li>
              Maximal divisors and relative Kodaira dimension (with Tian-Jun Li)
            </li>
            <li>
              Finite group actions on symplectic rational surfaces (with Weiwei
              Wu and Shuo Zhang)
            </li>
            <li>
              Topology of symplectic fillings of triangle singularities (with
              Yang Zhou)
            </li>
            <li>
              Connectedness of negative configurations and its applications
              (with Weiwei Wu)
            </li>
          </ul>
        </section>

        <section>
          <h2>Expository writings</h2>
          <ul className="dense-list">
            <li>
              <a href="https://drive.google.com/file/d/0B1KOvF8eexDbUks2VE5WOTZONHM/view?usp=sharing">
                Quantitative transversality and symplectic topology
              </a>
              . MPhil thesis.
            </li>
            <li>Symplectic caps and fillings.</li>
            <li>Convex symplectic manifolds.</li>
          </ul>
        </section>

        <section>
          <h2>Research talks</h2>
          <ul className="dense-list">
            {researchTalks.map((talk) => {
              const material = talkMaterials[talk];

              return (
                <li key={talk}>
                  {talk}
                  {material ? (
                    <>
                      {" "}(<a href={material.href}>{material.label}</a>)
                    </>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2>Selected expository talks</h2>
          <ul className="dense-list">
            {expositoryTalks.map((talk) => {
              const material = talkMaterials[talk];

              return (
                <li key={talk}>
                  {talk}
                  {material ? (
                    <>
                      {" "}(<a href={material.href}>{material.label}</a>)
                    </>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>
      </article>
    </SiteShell>
  );
}
