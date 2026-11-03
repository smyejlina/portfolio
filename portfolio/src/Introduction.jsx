function Introduction() {
  return (
    <div className="container">
      <div className="left intro-text">
        <h2 className="header">
          print("Hello World!")<span className="bar">|</span>
        </h2>
        <p>A place where coding and creativity come together.</p>
        <p>
          Curious about me?{" "}
          <a href="#aboutMe" className="link">
            Hop on ⮕
          </a>
        </p>
      </div>
      <div className="right img-container">
        <img
          src="src/assets/coding_rabbit.png"
          alt="Image of rabbit coding"
          className="introd-img"
        />
      </div>
    </div>
  );
}
export default Introduction;
