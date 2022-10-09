import React from "react";
import "./Shirt.css";

const Shirt = ({ shirt, shirts, btnHandler }) => {
  const { _id, picture, name, price } = shirt;
  return (
    <div className="single-shirt">
      <img src={picture} alt="" />
      <h1>{name}</h1>
      <p>Price: ${price}</p>
      <button onClick={() => btnHandler(shirt)}>Buy Now</button>
    </div>
  );
};

export default Shirt;
