import React from "react";
import "./index.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PainQuotidien from "../../assets/img/pain-quotidien.webp";

const Restaurant = ({ restaurants }) => {
  return (
    <section className="restaurant-description">
      <div>
        <nav>
          <span>Accueil / Paris 11ème - Bastille / {restaurants.path}</span>
        </nav>
        <h1>{restaurants.name}</h1>
        <div className="ratings">
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon={"star-half-alt"} />
          <p className="rating">{restaurants.percentage / 20}</p>
          <p>({restaurants.ratings} notes)</p>
        </div>
        <p>
          <span>{restaurants.categories.join(" • ")} </span>
          <span>• {restaurants.address}</span>
        </p>
        <p className="description">{restaurants.description}</p>

        <span>
          <FontAwesomeIcon icon={"ticket-alt"} />
          Offre Spéciale
        </span>

        <div className="more-information">
          <FontAwesomeIcon icon="info-circle" />
          <div>
            <p>Infos restaurant</p>
            <p>Allergènes et plus</p>
          </div>
        </div>
      </div>
      <div>
        <img src={PainQuotidien} alt="" />
        <div>
          <FontAwesomeIcon icon="bicycle" />
          <div>
            <p>Livré dans {restaurants.delay}</p>
            <p>{restaurants.client_address.formatted_address}</p>
          </div>
        </div>

        <button>
          <FontAwesomeIcon icon="users" />
          Démarrer une commande groupée
        </button>
      </div>
    </section>
  );
};

export default Restaurant;
