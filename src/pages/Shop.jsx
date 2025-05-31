import { useLocation } from "react-router-dom";

const ShoppingCart = () => {
  console.log("Current location:", useLocation());
  return (
    <div>
      <h1>Shop</h1>
      <p>Your shopping cart is currently empty.</p>
    </div>
  );
};

export default ShoppingCart;
