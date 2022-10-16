import "../styles/Bouton_strategie.css";

function Bouton_strategie() {
  return (
    <div className="boxdl">
      <a
        className="dl"
        href="./assets/fiche_apprentissage.pdf"
        download="fiche_apprentissage.pdf"
      >
        Ma stratégie d'apprentissage délimité
      </a>
    </div>
  );
}
export default Bouton_strategie;
