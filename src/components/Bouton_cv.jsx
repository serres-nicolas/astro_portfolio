import "../styles/Bouton_cv.css";

function Bouton_cv() {
  return (
    <div className="contentbtn">
      <a
        className="glassbtn"
        href="./assets/nicolas_serres_CV.pdf"
        download="nicolas_serres_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Télécharger le CV
      </a>
    </div>
  );
}
export default Bouton_cv;
