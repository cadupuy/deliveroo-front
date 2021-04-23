import React from "react";
import "./index.css";

// Components
import NavElement from "../HeaderNav";
// Images
import Logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <NavElement icon="home" title="Connexion" />
          <NavElement icon="bars" title="Menu" />
        </nav>
      </div>
      <hr />
    </header>
  );
};

export default Header;
