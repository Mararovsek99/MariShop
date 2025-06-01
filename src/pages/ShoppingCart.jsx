import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./ShoppingCart.css";

function ShoppingCart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <span>
                {item.title} - ${item.price.toFixed(2)} × {item.quantity}
              </span>
              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <p className="cart-total">Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
