import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = ({ meals, setCart, cart }) => {
  const handleClick = () => {
    const newTab = [...cart];
    let isPresent = false;
    for (let i = 0; i < newTab.length; i++) {
      if (newTab[i].id === meals.id) {
        newTab[i].quantity++;
        isPresent = true;
        return setCart(newTab);
      }
    }
    if (!isPresent) {
      newTab.push({
        id: meals.id,
        name: meals.title,
        price: meals.price,
        quantity: 1,
      });
      setCart(newTab);
    }
  };
  return (
    <div className="menu-card" onClick={handleClick}>
      <div>
        <p>{meals.title}</p>
        <p>
          {meals.description.length > 60
            ? meals.description.slice(0, 60) + "..."
            : meals.description}
        </p>
        <p>
          {meals.price.replace(".", ",")} €
          {meals.popular && (
            <span className="popular">
              <FontAwesomeIcon icon="star" />
              <span>Populaire</span>
            </span>
          )}
        </p>
      </div>

      <div>{meals.picture && <img src={meals.picture} alt="plat" />}</div>
    </div>
  );
};

export default index;
