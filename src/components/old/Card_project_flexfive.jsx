import "../styles/Card_project_flexfive.css";

function Card_project_flexfive() {
  return (
    <section class="row-rectangle">
      <a class="button_project" href="./assets/projet_glpi.pdf">
        <h4 class="main_title_project">
          <p class="appli">GLPI</p>
          <img src="/assets/g.svg" alt="Routeur logo" class="python_svg" />
        </h4>
      </a>
      <a class="button_project" href="./assets/projet_gitlab.pdf">
        <h4 class="main_title_project">
          <p class="appli">Gitlab</p>
          <img src="/assets/gitlab2.svg" alt="Test logo" class="python_svg" />
        </h4>
      </a>
      <a class="button_project" href="./assets/projet_ad.pdf">
        <h4 class="main_title_project">
          <p class="appli">Active Directory</p>
          <img src="/assets/ad.svg" alt="Gym logo" class="python_svg" />
        </h4>
      </a>
    </section>
  );
}
export default Card_project_flexfive;
