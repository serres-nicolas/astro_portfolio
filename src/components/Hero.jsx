import "../styles/Hero.css";
import { useState } from "react";
function Hero(props) {
  const [count, setCount] = useState(0);
  return (
    <section className="hero">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </section>
  );
}
export default Hero;
