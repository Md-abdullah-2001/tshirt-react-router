import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Shirt from "../Shirt/Shirt";
import "./Home.css";

const Home = () => {
  const shirts = useLoaderData();
  const [cart, setCart] = useState([]);

  const btnHandler = (shirt) => {
    const exist = cart.find((sh) => sh._id === shirt._id);
    if (exist) {
      alert("Already Added before");
    } else {
      const newCart = [...cart, shirt];
      setCart(newCart);
    }
  };
  const removeItemBtn = (shirt) => {
    const remaining = cart.filter((shrt) => shrt._id !== shirt._id);
    setCart(remaining);
  };
  return (
    <div className="home-container">
      <div className="shirt-container">
        {shirts.map((shirt) => (
          <Shirt key={shirt._id} shirt={shirt} btnHandler={btnHandler}></Shirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} key={cart._id} removeItemBtn={removeItemBtn}></Cart>
      </div>
    </div>
  );
};

export default Home;
