import "../styles/Nav.css";
import currentPath from "react-dom";

function Nav() {
  return (
    <header className="header">
      <div>
        <h1>Nicolas Serres</h1>
      </div>
      <nav>
        <ul class="mobile_nav">
          <li class="mobile_nav_li">
            <a class={currentPath === "" ? "active" : ""} href="/">
              Accueil
            </a>
          </li>
          <li class="mobile_nav_li">
            <a class={currentPath === "" ? "active" : ""} href="/alternance">
              Alternance
            </a>
          </li>
          <li>
            <a class="mobile_nav_li" href="/curriculumvitae">
              Curriculum vitae
            </a>
          </li>
          <li>
            <a class="mobile_nav_li" href="/projet">
              Projet
            </a>
          </li>
          <li>
            <a class="mobile_nav_li" href="/veille_old">
              Veille IT
            </a>
          </li>
          <li>
            <a class="mobile_nav_li" href="/tableau">
              Tableau
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Nav;
