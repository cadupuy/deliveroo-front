import React from "react";
import MenuItem from "../MenuItem/index";
import "./index.css";

const Menu = ({ menus, setCart, cart }) => {
  return (
    <section className="left-section">
      <div className="container">
        {menus.map((restaurant, index) => {
          return (
            <div key={index} className="meals-bloc">
              {restaurant.meals.length > 0 && <h2>{restaurant.name}</h2>}
              <div className="menus">
                {restaurant.meals.map((meals, index) => {
                  return (
                    <MenuItem
                      meals={meals}
                      setCart={setCart}
                      cart={cart}
                      key={meals.id}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
