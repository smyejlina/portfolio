import ProjectCard from "./ProjectCard";

function Project() {
  return (
    <div className="container project" id="projects">
      <h2 className="header">But what have I built?</h2>
      <div className="container-projects">
        <ProjectCard
          src="src/assets/android_app.png"
          alt="image of an andoid app for students to add courses"
          title="Android App"
          type="Project"
          beginningDate="Sept 2026"
          skills={["Kotlin", "Android Studio", "SQLite"]}
          description="An Android application built for my software engineering course."
        />
        <ProjectCard
          src="src/assets/android_app.png"
          alt="image of an andoid app for students to add courses"
          title="Android App"
          type="Project"
          beginningDate="Sept 2026"
          skills={["Kotlin", "Android Studio", "SQLite"]}
          description="An Android application built for my software engineering course."
        />
        <ProjectCard
          src="src/assets/android_app.png"
          alt="image of an andoid app for students to add courses"
          title="Android App"
          type="Project"
          beginningDate="Sept 2026"
          skills={["Kotlin", "Android Studio", "SQLite"]}
          description="An Android application built for my software engineering course."
        />
      </div>
    </div>
  );
}
export default Project;
