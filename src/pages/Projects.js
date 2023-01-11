import ProjectCard from "../components/ProjectCard";
import projectArr from "../projects";

const projects = projectArr.map((ele, index) => {
  return <ProjectCard {...ele} key={index} />;
});
export default function Projects(props) {
  return (
    <div>
      <section className="projects">
        <h3>My projects</h3>
        <div id="the-projects">{projects}</div>
      </section>
    </div>
  );
}
