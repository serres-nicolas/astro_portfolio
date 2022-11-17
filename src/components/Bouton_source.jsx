import "../styles/Bouton_source.css";

function Bouton_source() {
  return (
    <div className="contentbtn">
      <a
        className="glassbtn"
        href="./assets/articles.pdf"
        download="articles.pdf"
      >
        Mes sources
      </a>
    </div>
  );
}
export default Bouton_source;
