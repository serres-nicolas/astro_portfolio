import React from "react";
import "../styles/CardProjet.css";

const CardProjet = ({ projet }) => {
  return (
    <a className="button_project" href={projet.pdf}>
      <h4 className="main_title_project">
        <p className="appli">{projet.name}</p>
        <img
          className="python_svg"
          src={projet.img}
          alt={"logo" + projet.name}
        />
      </h4>
    </a>
  );
};

export default CardProjet;
