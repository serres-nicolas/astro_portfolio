import "../styles/Bouton_tableau.css";

function Bouton_tableau() {
  return (
    <div className="boxdl">
      <a className="dl" href="./assets/t1.pdf" download="t1.pdf">
        télécharger le tableau
      </a>
    </div>
  );
}
export default Bouton_tableau;
