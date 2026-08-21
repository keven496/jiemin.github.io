import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "Academic Activities",
  description: "Workshops and conferences attended by Jie Min.",
};

const activities = [
  "Dec 5–6, Conference on Gauge theory and low dimensional topology, AMSS",
  "International conference on gauge theory, Capital Normal University",
  "International conference on symplectic dynamics, SUSTech, 2025",
  "EIT topology conference, Eastern Institute of Technology Ningbo, 2025",
  "Trisectors workshop, UT Austin, 2025",
  "Georgia topology conference, University of Georgia, 2025",
  "Winter school on enumerative geometry and mirror symmetry, Caltech, Jan 2025",
  "Yamabe Symposium, University of Minnesota, Oct 2024",
  "Rutgers Symplectic summer school, Rutgers University, August 2024",
  "Trisections workshop in Lincoln, University of Nebraska Lincoln, June 2024",
  "Georgia Topology conference, University of Georgia, May 2024",
  "Singularities in Ann Arbor, University of Michigan, May 2024",
  "2023 Simons Center for Geometry and Physics summer workshop, 2023",
  "Trisectors workshop, UC Davis, 2023",
  "2023 Spring Central Sectional Meeting, University of Cincinnati, 2023",
  "Interactions between Symplectic and Holomorphic Convexity in 4 Dimensions, BIRS, 2023",
  "Workshop on Lie Groups, Singular Spaces, and Higher Structures, Fields Institute, 2023",
  "AMS Fall Eastern Sectional Meeting, University of Massachusetts Amherst, 2022",
  "Mirror symmetry for Looijenga interiors and beyond, 2022 (online)",
  "Frontiers in Geometry and Topology Research Conference, ICTP, 2022 (online)",
  "UCLA geometry and topology workshop, UCLA, 2020",
  "Homological Algebra, Microlocal Sheaves, and Symplectic Geometry, CRM, Montreal, 2019",
  "FRG Workshop on Symplectic Isotopy and Packing, University of Michigan, Ann Arbor, 2019",
  "The topology and geometry of low-dimensional manifolds: a celebration of the mathematics of Bob Gompf, University of Texas, Austin, 2018",
  "UCLA low dimensional topology workshop, UCLA, 2018",
  "Mirror Symmetry and Related Topics, Miami, 2018",
  "Kylerec student workshop on symplectic geometry, Truckee, CA, 2017",
  "AMS Fall Central Sectional Meeting, University of St. Thomas, Minneapolis, 2016",
  "Georgia Topology Conference: Parameterized Morse Theory in Low-Dimensional and Symplectic Topology, University of Georgia, 2016",
  "Topology in dimension 3.5, Rice University, 2016",
  "Perspectives in topology and geometry of 4-manifolds, Inter University Center, Dubrovnik, 2016",
  "Workshop in Symplectic Geometry: Lefschetz fibration — rigidity and flexibility, New Orleans, 2016",
  "Mirror Symmetry and Wall Crossing, UC Berkeley, 2016",
  "Graduate Student Topology and Geometry Conference, Indiana University Bloomington, 2016",
  "East Asian Symplectic Geometry Conference, Chinese University of Hong Kong, 2015",
  "Summer School, Mathematical Science Center, Tsinghua University, Beijing, 2014",
];

export default function ActivitiesPage() {
  return (
    <SiteShell active="home">
      <article className="content-page narrow-page">
        <header className="page-heading">
          <p className="eyebrow">Conferences &amp; workshops</p>
          <h1>Academic Activities</h1>
        </header>
        <p className="lead">Sponsored workshops and conferences:</p>
        <ul className="timeline-list">
          {activities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </article>
    </SiteShell>
  );
}
