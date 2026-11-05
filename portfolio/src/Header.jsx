function Header() {
  return (
    <header>
      <nav>
        <ul className="list">
          <li>
            <a href="#aboutMe">About me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contactMe" className="btn">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
