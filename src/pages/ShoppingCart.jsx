import React from "react";
import "./ShoppingCart.css";

function ShoppingCart() {
  // Example cart items (you’ll later replace this with real state or context)
  const cartItems = [
    {
      id: 1,
      title: "T-Shirt",
      price: 29.99,
      quantity: 2,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 2,
      title: "Watch",
      price: 89.99,
      quantity: 1,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default ShoppingCart;
