import React from "react";

const index = ({ cart }) => {
  return (
    <section className="cart">
      <button>Valider mon panier</button>
      {cart.map((item, index) => {
        return (
          <>
            <div>
              <div>
                <p>{item.quantity}</p>
              </div>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          </>
        );
      })}
      <>
        <p>Précisions particulières sur la commande </p>
        <hr />
        <div>
          <p>Sous-total</p>
          <p>6,60</p>
        </div>
        <div>
          <p>Frais additionnels</p>
          <p>1,40 €</p>
        </div>

        <div>
          <p>Frais de livraison</p>
          <p>1,40 €</p>
        </div>

        <div>
          <p>frais de service</p>
          <p>0,59€</p>
        </div>

        <div>
          <p>Pourboire livreur</p>
          <p>0,59€</p>
        </div>

        <div>
          <p>Total</p>
          <p>0,59€</p>
        </div>
      </>
      ;
    </section>
  );
};

export default index;
