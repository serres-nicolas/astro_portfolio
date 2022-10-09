import "../styles/Card_veille.css";

function Card_veille(props) {
  return (
    <section class="about_section3">
      <article class="flex_tableau">
        <div class="google_alerte">
          <img class="card_img" src="./assets/mcgoogle.jpg" alt="google_img" />
        </div>
        <div class="feadly">
          <h4>Google Alertes</h4>
          <ul class="logo1">
            <li>
              <img class="logox" src="./assets/google.svg" alt="google" />
            </li>
            <li>
              <img class="logox" src="./assets/bell-solid.svg" alt="bell" />
            </li>
          </ul>
          <p>
            C'est un service qui envoie un courriel ou une alerte lorsqu'une
            nouvelle page web correspondant aux mots-clés que l'on a choisis,
            apparaît dans les résultats Google
          </p>
          <div class="boxdl">
            <a class="dl" href="./assets/demarches.pdf">
              Mes démarches
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Card_veille;
