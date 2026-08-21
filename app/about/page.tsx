import type { Metadata } from "next";
import { SiteShell } from "../components/SiteShell";

export const metadata: Metadata = {
  title: "About Me",
  description: "Personal interests and photography by Jie Min.",
};

const interests = [
  {
    name: "Sports",
    description: "Badminton, Squash, Ski, Hike, Bike, Tennis, Skate and more",
    image:
      "https://lh3.googleusercontent.com/3lw4AMwwn-FOa4KYcpXoPT2uXaTnXeCIzBFDIJAPhY5XdXYrhs-InzQBmTUy7KPmFTWej7Shflhz1zrWyO9xoa1QHB64L639E4GZtIQ0bsqm5byly1AX4A5Ey70kdU12LLFI2LS57vM=w1280",
  },
  {
    name: "Harry Potter",
    description: "Fantasy novel series and movie series",
    image:
      "https://lh6.googleusercontent.com/oSWwiXVUa8PzLDD89lbsDhsCaLKg3Quzu7xZFiBRliYoIQ68LH-i4IumkG2J7jZtVfBlhwhHWv-50M6zS04sCILgHZ86YQRl2flGbKU4_MYyESOLwlo3T1myW8ERTI3S7DmoouW8VMxKg6kagkk3EDuWRTnwvshrOXc7=w1280",
  },
  {
    name: "Hollow Knight",
    description: "Metroidvania video game by Team Cherry",
    image:
      "https://lh3.googleusercontent.com/5WllIgOdYnkWku3hF6KXgktx5OquLEuR6deo3NQhwC-qSvueyDirs8qcbPLxcDnntMjf-P5ya1VQ3FP_RZB-i7iSezQvQ1MSOoPuX2dkr3aQW48Cz3TboFcFgbqu19RGDZkxxWMLRqcgq9a5QoLHxRYjaZ7C5TrYr0qxNp-p6cNaZWMYIUh3Ng=w1280",
  },
  {
    name: "Friends",
    description: "TV series",
    image:
      "https://lh6.googleusercontent.com/DtHxXPBC8JL_Th1CTtaSLb6069DLuJKvQpTGwQlFX0xeCu6yT-JIXXCtouZbv1L4M5_SZTkn2snm1FxYndtN2edexkk-p7R_VdqPoaVnkiCYQIxHWnJkdzobzOEg7uMTSaU1zkM2pAguhxwXQvvGr8EVJAjXgh2nQDnS=w1280",
  },
];

export default function AboutPage() {
  return (
    <SiteShell active="about">
      <article className="content-page">
        <header className="page-heading">
          <p className="eyebrow">Personal</p>
          <h1>About me</h1>
        </header>

        <section className="narrow-copy">
          <h2>Personal</h2>
          <p className="lead">
            I entered in college as a business major, but decided to transfer to
            math major in my senior year, because I just cannot resist it. I have
            lived in Shandong, Shanghai, Hong Kong, Minneapolis, Bonn, before I
            moved to Amherst. In my leisure time, I enjoy reading, movies,
            hiking, archery, photography and all sorts of music. In particular,
            I am a big fan of the following.
          </p>
        </section>

        <div className="interest-grid">
          {interests.map((interest) => (
            <figure className="interest-card" key={interest.name}>
              <img src={interest.image} alt="" />
              <figcaption>
                <h2>{interest.name}</h2>
                <p>{interest.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <section className="photography-links">
          <h2>Photography</h2>
          <p>
            <a href="https://www.flickr.com/people/flow-wind/">Flickr</a>
            <span aria-hidden="true"> · </span>
            <a href="https://www.viewbug.com/member/jiemin">Viewbug</a>
          </p>
        </section>
      </article>
    </SiteShell>
  );
}
