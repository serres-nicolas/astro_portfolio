import "../styles/Card_project_flexfour.css";

function Card_project_flexfour() {
  return (
    <section class="row-rectangle">
      <a class="button_project" href="./assets/accompagner_utilisateur.pdf">
        <h4 class="main_title_project">
          <p class="appli">ACCOMPAGNEMENT UTILISATEUR</p>
          <img
            src="/assets/router-svgrepo-com.svg"
            alt="Routeur logo"
            class="python_svg"
          />
        </h4>
      </a>
      <a class="button_project" href="./assets/test_integ.pdf">
        <h4 class="main_title_project">
          <p class="appli">TEST D'INTEGRATION</p>
          <img src="/assets/test-tube.svg" alt="Test logo" class="python_svg" />
        </h4>
      </a>
      <a class="button_project" href="https://react-etoile.vercel.app/">
        <h4 class="main_title_project">
          <p class="appli">DEVELOPPER POUR UNE ORGANISATION</p>
          <img src="/assets/gym.svg" alt="Gym logo" class="python_svg" />
        </h4>
      </a>
    </section>
  );
}
export default Card_project_flexfour;
