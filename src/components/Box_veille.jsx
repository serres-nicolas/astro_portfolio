import "../styles/Box_veille.css";

function Box_veille(props) {
  return (
    <section class="about_section2">
      <h4 class="subject">{props.title}</h4>
      <p class="pveille">{props.text}</p>
    </section>
  );
}
export default Box_veille;
