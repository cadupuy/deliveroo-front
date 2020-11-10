import React from "react";
import NavElement from "../HeaderNav";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <NavElement
            icone={<FontAwesomeIcon icon="info-circle" />}
            title="0,00 €"
          />
          <NavElement title="Connexion" />
          <NavElement title="Menu" />
        </nav>
      </div>
      <hr />
    </header>
  );
};

export default Header;
