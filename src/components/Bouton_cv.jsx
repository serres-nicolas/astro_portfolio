import "../styles/Bouton_cv.css";

function Bouton_cv() {
  return (
    <div className="boxdl">
      <a
        className="dl"
        href="./assets/nicolas_serres_CV..pdf"
        download="nicolas_serres_CV."
      >
        télécharger le CV
      </a>
    </div>
  );
}
export default Bouton_cv;
