import "../styles/Card_project_flexthree.css";
import { Icon } from "astro-icon";

function Card_project_flexthree() {
  return (
    <section class="row-rectangle">
      <a class="button_project" href="./assets/accompagner_utilisateur.pdf">
        <h4 class="main_title_project">
          <p class="appli">ACCOMPAGNEMENT ROUTEUR</p>
          <img
            src="/assets/router-svgrepo-com.svg"
            alt="Routeur logo"
            class="python_svg"
          />
        </h4>
      </a>
      <a class="button_project" href="./assets/test_int_project.pdf">
        <h4 class="main_title_project">
          <p class="appli">TEST D'INTEGRATION</p>
          <img src="/assets/test-tube.svg" alt="Test logo" class="python_svg" />
        </h4>
      </a>
      <a class="button_project" href="./assets/python.pdf">
        <h4 class="main_title_project">
          <p class="appli">DEVELOPPER POUR UNE ORGANISATION</p>
          <img src="/assets/gym.svg" alt="Gym logo" class="python_svg" />
        </h4>
      </a>
    </section>
  );
}
export default Card_project_flexthree;
