import { Link } from "react-router-dom";
import "./ActionToPerforms.css";

const Card = () => {
  return (
    <div className="main-card">
      {/* Card principale avec texte lorem */}
      <div className="card">
        <p>
          "Faites tout le bien que vous pouvez, par tous les moyens que vous
          pouvez, de toutes les manières que vous pouvez, dans tous les endroits
          que vous pouvez, à toutes les personnes que vous pouvez, aussi
          longtemps que vous le pouvez"– John Wesley
        </p>
      </div>

      {/* Section des images en dessous de la carte */}
      <div className="image-container">
        {/* Première carte image */}
        <div className="image-card">
          <Link to="/empty">
            {/* Lien vers la page vide */}
            <img
              src="https://i.ibb.co/fMW0s22/rb-31979-1.png"
              alt="Validation"
            />
          </Link>
        </div>

        {/* Deuxième carte image */}
        <div className="image-card">
          <Link to="/empty">
            {/* Lien vers la page vide */}
            <img
              src="https://i.ibb.co/MpcZGW2/rb-31979-2.png"
              alt="NotValidation"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
