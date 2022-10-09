import "../styles/Nav.css";
function Nav() {
  return (
    <header className="header">
      <div>
        <h1>Nicolas Serres</h1>
      </div>
      <nav>
        <ul class="mobile_nav">
          <li>
            <a class="mobile_nav_li" href="/">
              Accueil
            </a>
          </li>
          <li>
            <a class="mobile_nav_li" href="/alternance">
              Alternance
            </a>
          </li>
          <li>
            <a class="mobile_nav_li" href="/Curriculumvitae2.html">
              Curriculum vitae
            </a>
          </li>
          <li>
            <a class="mobile_nav_li" href="/projet2.html">
              Projet
            </a>
          </li>
          <li>
            <a class="mobile_nav_li" href="/veilleit.html">
              Veille IT
            </a>
          </li>
          <li>
            <a class="mobile_nav_li" href="/tableau.html">
              Tableau
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
