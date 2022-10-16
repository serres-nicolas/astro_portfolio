import "../styles/Bouton_poursuite.css";

function Bouton_poursuite() {
  return (
    <div className="boxdl">
      <a
        className="dl"
        href="./assets/mon_projet.pdf"
        download="mon_projet.pdf"
      >
        Poursuite d'études.
      </a>
    </div>
  );
}
export default Bouton_poursuite;
