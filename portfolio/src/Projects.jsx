import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div className="container">
      <h2 className="header">But what have I built?</h2>
      <ProjectCard
        title="Android App"
        type="University Project"
        beginningDate="Sept 2026"
        skills={["Kotlin", "Android Studio", "SQLite"]}
        description="An Android application built for my software engineering course."
      />
    </div>
  );
}
export default Project;
