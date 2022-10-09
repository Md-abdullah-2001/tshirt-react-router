import React from "react";

const Cart = ({ cart, removeItemBtn }) => {
  let message;
  if (cart.length === 0) {
    message = "Buy At Least One Item";
  } else {
    message = "Thanks for buying";
  }
  return (
    <div>
      <h1>Summary of the Cart</h1>
      <h3>Selected Items: {cart.length}</h3>
      {cart.map((shirt) => (
        <p key={shirt._id}>
          {shirt.name}
          <button onClick={() => removeItemBtn(shirt)}>x</button>
        </p>
      ))}
      {message}
    </div>
  );
};

export default Cart;
