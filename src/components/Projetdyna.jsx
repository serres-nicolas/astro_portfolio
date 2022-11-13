import React, { useState } from "react";
import CardProjet from "./CardProjet";
import "../styles/Projetdyna.css";

const Projet = () => {
  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadioo, setSelectedRadioo] = useState("");
  const array_projet = [
    {
      name: "Python Socket",
      pdf: "./assets/projet_python.pdf",
      img: "./assets/python.svg",
      type: "Développement",
    },
    {
      name: "FreecodeCamp",
      pdf: "./assets/projet_freecodecamp.pdf",
      img: "./assets/free-code-camp.svg",
      type: "Développement",
    },
    {
      name: "PHP menu",
      pdf: "./assets/projet_php.pdf",
      img: "./assets/php.svg",
      type: "Développement",
    },
    {
      name: "OSN 1800",
      pdf: "./assets/osn_projet.pdf",
      img: "./assets/circle-nodes-solid.svg",
      type: "Réseau",
    },
    {
      name: "Rootme",
      pdf: "./assets/projet_rootme.pdf",
      img: "./assets/skull-solid.svg",
      type: "Réseau",
    },
    {
      name: "Cisco Packet",
      pdf: "./assets/projet_cisco.pdf",
      img: "./assets/envelope-regular.svg",
      type: "Réseau",
    },
    {
      name: "React JS",
      pdf: "./assets/react_projet.pdf",
      img: "./assets/react.svg",
      type: "Développement",
    },
    {
      name: "Astro",
      pdf: "./assets/astro_project.pdf",
      img: "/assets/favicon.svg",
      type: "Développement",
    },
    {
      name: "Accompagnement Utilisateur",
      pdf: "./assets/accompagner_utilisateur.pdf",
      img: "/assets/router-svgrepo-com.svg",
      type: "Système",
    },
    {
      name: "Test d'intégration",
      pdf: "./assets/test_integ.pdf",
      img: "/assets/test-tube.svg",
      type: "Réseau",
    },
    {
      name: "Développer pour une organisation",
      pdf: "https://etoile-astro.vercel.app/",
      img: "/assets/gym.svg",
      type: "Développement",
    },
    {
      name: "Glpi",
      pdf: "./assets/projet_glpi.pdf",
      img: "./assets/g.svg",
      type: "Système",
    },
    {
      name: "Gitlab",
      pdf: "./assets/projet_gitlab.pdf",
      img: "./assets/gitlab2.svg",
      type: "Développement",
    },
    {
      name: "Active directory",
      pdf: "./assets/projet_ad.pdf",
      img: "./assets/ad.svg",
      type: "Système",
    },
  ];

  const radioss = ["Développement", "Réseau", "Système"];

  return (
    <div className="containerprojet">
      <ul className="radio-container">
        {/* on fait du javascript pour faire une map de notre base de donnée  */}
        {radioss.map((valeur) => (
          <li>
            <input
              type="radio"
              //  on connecte l'id avec le htmlFor
              id={valeur}
              name="valeurRadio"
              // est ce que continent est égal à selectedRadio
              checked={valeur === selectedRadioo}
              // on stock le nom du continent que l'utilisateur veut voir grace au Usestate
              onChange={(e) => setSelectedRadioo(e.target.id)}
            />
            {/* on connecte l'id avec le htmlFor */}
            <label htmlFor={valeur}>{valeur}</label>
          </li>
        ))}
      </ul>
      {/* si selected est true alors tu m affiches annuler la recherche */}
      {selectedRadioo && (
        // tu me crée un bouton pour annuler la recherche car selectedradio est devenu true via le Usestate,
        // on lui ajoute lorsque l'on clique dessus tu nous remet setselectedradio a false et donc tu disparais
        <button onClick={() => setSelectedRadioo("")}>
          Annuler la recherche
        </button>
      )}
      {/* on appel nos données que l'on filtre, trie, coupe, et map */}
      <ul className="row-rectangle">
        {array_projet
          .filter((projet) => projet.type.includes(selectedRadioo))
          .slice(0, rangeValue)
          .map((projet, index) => (
            <CardProjet key={index} projet={projet} /> //projet est la props qui transmet la donnée du parent Ici à l'enfant Card
          ))}
      </ul>
    </div>
  );
};

export default Projet;
