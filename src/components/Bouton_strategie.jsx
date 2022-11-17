import "../styles/Bouton_strategie.css";

function Bouton_strategie() {
  return (
    <div className="contentbtn">
      <a
        className="glassbtn"
        href="./assets/fiche_apprentissage.pdf"
        download="fiche_apprentissage.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Stratégie d'apprentissage
      </a>
    </div>
  );
}
export default Bouton_strategie;
