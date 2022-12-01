import "../styles/Card_veille_feadly.css";

function Card_veille_feadly(props) {
  return (
    <article class="flex_tableau">
      <div class="google_alerte">
        <img class="card_img" src="./assets/Feedly2.png" alt="google_img" />
      </div>
      <div class="feadly">
        <h4>Feadly</h4>
        <ul class="logo1">
          <li>
            <img class="logox" src="./assets/f-solid.svg" alt="google" />
          </li>
          <li>
            <img class="logox" src="./assets/bell-solid.svg" alt="bell" />
          </li>
        </ul>
        <p>
          C'est une entité qui combine plusieurs services ou informations en un
          seul outil de flux RSS et Atom en ligne permettant de gérer et
          personnaliser ces abonnements
        </p>
        <div class="boxdl">
          <a class="dl" href="./assets/demarches.pdf">
            Mes démarches
          </a>
        </div>
      </div>
    </article>
  );
}

export default Card_veille_feadly;
