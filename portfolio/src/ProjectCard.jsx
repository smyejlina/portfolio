function ProjectCard({
  src,
  alt,
  title,
  type,
  beginningDate,
  skills = [],
  description,
  endDate = "Present",
}) {
  return (
    <div className="project-card">
      <div className="img-container-project">
        <img src={src} alt={alt} className="projects-img" />
      </div>

      <div className="project-card-content">
        <span className="tag">{type}</span>
        <h3>{title}</h3>

        <p>
          {beginningDate} - {endDate}
        </p>

        <p>{description}</p>
        <ul className="list tag-list">
          {skills.map((skill) => (
            <li className="tag" key={skill}>
              {skill}
            </li>
          ))}
        </ul>

        <a href="#contactMe" className="btn">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
