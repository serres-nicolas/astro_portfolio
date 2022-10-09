import "../styles/Card.css";

function Card() {
  return (
    <div className="carre">
      <img
        className="item1"
        src="../public/assets/imgnico.jpg"
        width="185"
        height="261"
      />
      <div className="item2"> Nicolas Serres </div>
      <div className="item3"> Etudiant BTS SIO SISR </div>
      <div className="item4">
        {" "}
        Apprentissage chez Orange réseau structurant{" "}
      </div>
      <div className="item5">
        <label for="mouse" class="checkbtn " id="checkbtn ">
          <i className="mousee"></i>
        </label>
        <ul className="logo1">
          <li>
            <a
              className="logoo"
              href="https://www.linkedin.com/in/nicolas-serres-709087152/"
            >
              {" "}
              <img
                className="logox"
                src="./assets/linkedin.svg"
                alt="linkedin"
              />
            </a>
          </li>
          <li>
            <a className="logoo" href="https://github.com/serres-nicolas">
              {" "}
              <img className="logox" src="./assets/github.svg" alt="github" />
            </a>
          </li>
          <li>
            <a className="logoo" href="https://gitlab.com/Miracle_s/">
              {" "}
              <img className="logox" src="./assets/gitlab.svg" alt="github" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Card;
