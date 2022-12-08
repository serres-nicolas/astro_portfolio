import "../styles/Bouton_tableau.css";

function Bouton_tableau() {
  return (
    <div className="contentbtn">
      <a
        className="glassbtn"
        href="./assets/tbsynth.pdf"
        download="tbsynth.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Télécharger le tableau
      </a>
    </div>
  );
}
export default Bouton_tableau;
