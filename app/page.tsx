import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "./components/SiteShell";

export const metadata: Metadata = {
  title: { absolute: "Jie Min — Mathematics" },
  description:
    "Academic website of Jie Min, Assistant Professor at HIMIS, working in low-dimensional and symplectic topology.",
};

export default function Home() {
  return (
    <SiteShell active="home">
      <article className="home-page">
        <div className="home-copy">
          <p className="eyebrow">Assistant Professor, HIMIS</p>
          <h1>Jie Min</h1>

          <p>
            I&apos;m now an assistant professor at{" "}
            <a href="https://www.himis-sz.cn/">
              Hetao Institute for Mathematics and Interdisciplinary Sciences
            </a>{" "}
            (HIMIS) in Shenzhen, China.
          </p>

          <p>
            Before that I have been a visiting assistant professor at UMass
            Amherst and a postdoc at Max Planck Institute of Mathematics at
            Bonn. I got my PhD in School of Mathematics, University of
            Minnesota, under the supervision of{" "}
            <a href="https://www-users.math.umn.edu/~tli/">Prof. Li, Tian-Jun</a>.
            My research interest lies in low dimensional topology and
            symplectic topology.
          </p>

          <p>
            Here is my current{" "}
            <a href="https://www.dropbox.com/scl/fi/pvwrc89mg1ykmft5fmr2c/Jie-Min-CV-long.pdf?dl=0&amp;rlkey=mha1mq7nt0epkb0z6jr5m5omh&amp;st=gmm0t0z6">
              CV
            </a>
            . <span className="quiet">(updated 4/25/2025)</span>
          </p>

          <section className="home-section" aria-labelledby="recently-heading">
            <h2 id="recently-heading">Recently, you can find me at</h2>
            <ul>
              <li>May 2026, Tianyuan Mathematical Center</li>
            </ul>
            <p>
              Here are some <Link href="/activities/">past conferences</Link>{" "}
              I have been to.
            </p>
          </section>

          <section className="home-section contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Contact</h2>
            <dl>
              <div>
                <dt>Office</dt>
                <dd>—</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:jiemin.geometry@gmail.com">
                    jiemin.geometry@gmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </section>
        </div>

        <figure className="portrait-wrap">
          <img
            className="portrait"
            src="https://lh3.googleusercontent.com/sitesv/AG8ngQVl24C52rHXYJQnzIHtNCNU3-NttdfihClGMJCL5injISMMCyuomp00IQXzow62yCFKQ12M-qBrERg1wWlwzlFwKLc2WIvKHsPoLxzBkFWlQy3KTJidUELAc2O24ncewf6zWXjZDX0zbKBqVaNbva-ayGzNPK1ylVqUdOMw3BKOJ9pP_iUFSvQSU3gBOOySTrpOUMJhKYXgfoEY-5-RiEj0NGFfHDDKDtJ0WblslaQ=w1280"
            alt="Jie Min"
          />
        </figure>
      </article>
    </SiteShell>
  );
}
