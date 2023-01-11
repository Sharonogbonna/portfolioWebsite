export default function Project({ name, coverPhoto, liveLink, githubLink }) {
  return (
    <div className="project-card">
      <div className="project-name">
        <a href={liveLink} target="_blank">
          <h1>{name}</h1>
        </a>
      </div>
      <div className="cover-photo">
        <a href={liveLink} target="_blank">
          <img
            className="cover-photo"
            src={"../" + coverPhoto}
            alt="screenshot of project"
          />
        </a>
      </div>
      <div className="github">
        <a href={githubLink} target="_blank">
          <img
            src="../githubIcon.png"
            alt="github icon"
            className="github-icon"
          />{" "}
        </a>
      </div>
    </div>
  );
}
