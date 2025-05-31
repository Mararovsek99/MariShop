import { useLocation } from "react-router-dom";

const ShoppingCart = () => {
  console.log("Current location:", useLocation());

  return (
    <div>
      <h1>Contact</h1>
      <p>your number: 054 545 646</p>
    </div>
  );
};

export default ShoppingCart;
