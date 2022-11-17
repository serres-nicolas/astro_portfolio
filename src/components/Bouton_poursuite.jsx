import "../styles/Bouton_poursuite.css";

function Bouton_poursuite() {
  return (
    <div className="contentbtn2">
      <a
        className="glassbtn2"
        href="./assets/mon_projet.pdf"
        download="mon_projet.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Poursuite d'études
      </a>
    </div>
  );
}
export default Bouton_poursuite;
