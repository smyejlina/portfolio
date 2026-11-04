function ProjectCard(
  title,
  type,
  beginningDate,
  skills,
  description,
  endDate = "Present",
) {
  <div>
    <div>
      <img src="" alt="" />
    </div>
    <div>
      <span>{type}</span>
      <h3>{title}</h3>
      <p>
        {beginningDate} - {endDate}
      </p>
      <p>{description}</p>
      {skills.map((skill) => {
        <span>{skill}</span>;
      })}
      <a href="#contactMe" className="btn">
        Learn More
      </a>
    </div>
  </div>;
}
export default ProjectCard;
