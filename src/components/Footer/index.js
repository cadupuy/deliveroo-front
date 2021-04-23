import React from "react";
import "./index.css";

// Icons & Images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppleBadge from "../../assets/img/apple-store.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div>
          <h2>Découvrir Deliveroo</h2>
          <ul>
            <li>À propos</li>
            <li>Espace presse</li>
            <li>Blog Foodscene</li>
            <li>Blog Tech</li>
            <li>Blog Design</li>
            <li>Nous rejoindre</li>
            <li>Inscription restaurant</li>
          </ul>
        </div>
        <div>
          <h2>Mentions légales</h2>
          <ul>
            <li>Mentions légales</li>
            <li>Confidentialité</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div>
          <h2>Aider</h2>
          <ul>
            <li>Nous contacter</li>
            <li>FAQ</li>
            <li>Types de cuisine</li>
            <li>Plan du site</li>
          </ul>
        </div>
        <div>
          <h2>Gardez Deliveroo dans votre poche</h2>
          <img src={AppleBadge} alt="apple badge" />
        </div>
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={["fab", "github"]} />
          <FontAwesomeIcon icon={["fab", "twitter"]} />
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </div>
        <div>
          <p> © 2020 Charles-Antoine Dupuy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
