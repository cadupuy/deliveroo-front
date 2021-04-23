import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

// Components
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import Restaurant from "./components/Restaurant/index";
import Menu from "./components/Menu/index";
import Cart from "./components/Cart/index";
import Loader from "react-loader-spinner";

// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faStar,
  faInfo,
  faUsers,
  faInfoCircle,
  faBars,
  faBicycle,
  faHome,
  faPlusCircle,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
  faHome,
  faStar,
  faStarHalfAlt,
  faInfo,
  faUsers,
  faInfoCircle,
  faBars,
  faBicycle,
  faPlusCircle
);

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://deliveroo-clone-api.herokuapp.com/"
      );
      setRestaurants(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return isLoading === true ? (
    <div className="loading">
      <Loader
        type="Oval"
        color="#00CCBC"
        height={100}
        width={100}
        timeout={999999}
      />
    </div>
  ) : (
    <>
      <Header />
      <Restaurant restaurants={restaurants.restaurant} />
      <main>
        <div className="container">
          <Menu menus={restaurants.categories} setCart={setCart} cart={cart} />
          <Cart cart={cart} setCart={setCart} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
