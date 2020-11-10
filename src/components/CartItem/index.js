import React from "react";
import "../CartItem/index.css";

const index = ({ item, cart, setCart, key }) => {
  const handleMinus = () => {
    const newTab = [...cart];

    if (item.quantity === 1) {
      for (let i = 0; i < newTab.length; i++) {
        if (newTab[i].id === item.id) {
          newTab.splice(i, 1);
          setCart(newTab);
        }
      }
    } else {
      for (let i = 0; i < newTab.length; i++) {
        if (newTab[i].id === item.id) {
          newTab[i].quantity--;
          setCart(newTab);
        }
      }
    }
  };
  const handlePlus = () => {
    const newTab = [...cart];
    for (let i = 0; i < newTab.length; i++) {
      if (newTab[i].id === item.id) {
        newTab[i].quantity++;
        return setCart(newTab);
      }
    }
  };

  return (
    <div key={item.id} className="cart-item">
      <div>
        <p onClick={handleMinus}>-</p>
        <p>{item.quantity}</p>
        <p onClick={handlePlus}>+</p>
      </div>
      <div>
        <p>{item.name}</p>
      </div>
      <p>{(Math.round(item.quantity * item.price * 100) / 100).toFixed(2)} €</p>
    </div>
  );
};

export default index;
