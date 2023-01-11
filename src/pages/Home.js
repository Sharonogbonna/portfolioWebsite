import Headshot from "../components/Headshot";
import AboutMe from "../components/AboutMe";

export default function Home(props) {
  return (
    <div className="home-page">
      <section className="about-me">
        <div>
          <Headshot />
        </div>
        <div>
          <AboutMe />
        </div>
      </section>
    </div>
  );
}
