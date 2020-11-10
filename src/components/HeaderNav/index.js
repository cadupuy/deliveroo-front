import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavElement = ({ title, icone }) => {
  return (
    <div className="navElement">
      <FontAwesomeIcon icon={icone} />
      <p>{title}</p>
    </div>
  );
};

export default NavElement;
