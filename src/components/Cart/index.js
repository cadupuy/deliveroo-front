import React from "react";
import CartItem from "../CartItem";
import "./index.css";

const index = ({ cart, setCart }) => {
  const shippingCost = 2.5;
  let price = 0;

  const totalPrice = () => {
    for (let i = 0; i < cart.length; i++) {
      price += Number(
        (Math.round(cart[i].price * cart[i].quantity * 100) / 100).toFixed(2)
      );
    }
    return price;
  };

  return cart.length > 0 ? (
    <section className="cart">
      <button>Valider mon panier</button>
      {cart.map((item, index) => {
        return (
          <>
            <CartItem item={item} key={item.id} cart={cart} setCart={setCart} />
          </>
        );
      })}
      <>
        <p>Précisions particulières sur la commande </p>
        <hr />
        <div>
          <p>Sous-total</p>
          <p>{totalPrice()}</p>
        </div>

        <div>
          <p>Frais de livraison</p>
          <p>{shippingCost}</p>
        </div>

        <div>
          <p>Total</p>
          <p>{price + shippingCost}</p>
        </div>
      </>
    </section>
  ) : (
    <section className="cart-empty">
      <>
        <button>Valider mon panier</button>

        <p>Votre panier est vide</p>
      </>
    </section>
  );
};

export default index;
