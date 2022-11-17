import React from "react";
import "../styles/CardProjet.css";

const CardProjet = ({ projet }) => {
  return (
    <a
      className="button_project"
      href={projet.pdf}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h4 className="main_title_project">
        <img
          className="python_svg"
          src={projet.img}
          alt={"logo" + projet.name}
        />
        <p className="appli">{projet.name}</p>
      </h4>
    </a>
  );
};

export default CardProjet;
