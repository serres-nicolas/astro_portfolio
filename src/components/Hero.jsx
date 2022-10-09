import "../styles/Hero.css";

function Hero(props) {
  return (
    <section className="hero">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </section>
  );
}
export default Hero;
