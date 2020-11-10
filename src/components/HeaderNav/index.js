import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavElement = ({ title, icon }) => {
  return (
    <div className="navElement">
      <FontAwesomeIcon icon={icon} />
      <p>{title}</p>
    </div>
  );
};

export default NavElement;
