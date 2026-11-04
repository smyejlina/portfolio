function AboutMe() {
  return (
    <div className="container" id="aboutMe">
      <div className="left-img img-container">
        <img
          src="src/assets/painting_puzzle_rabbit.png"
          alt="Rabbit balancing on a puzzle holding a prosh and carrying a bag with a coding logo"
          className="introd-img"
        />
      </div>
      <div className="right-text intro-text">
        <h2 className="header">More than a Hello world.</h2>
        <p>
          I'm Lina, a second-year computer science student at the University of
          Ottawa with an interest in data science, management and crafting.
          Right now, I'm building an Android app and my first portfolio.
        </p>
        <p>
          In my free time I enjoy painting, doing puzzles, learning new skills
          and going on a run. I am always thrilled to see my projects come to
          life.
        </p>
        <p>
          {" "}
          <a href="#aboutMe" className="link">
            Take a look at my work ⮕
          </a>
        </p>
      </div>
    </div>
  );
}
export default AboutMe;
