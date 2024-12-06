import "../Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="first-div">
        <Link to="/destination">
          <img className="profil" src="image/téléchargement.jpg" alt="Profil" />
        </Link>
        <p>Bonté à modérer</p>
        <img className="logo" src="image/rounded_image_2.webp" alt="" />
      </div>
    </header>
  );
}

export default Header;
