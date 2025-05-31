import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <Link to="" className="logo">
        MARISHOP
      </Link>
      <ul>
        <li>
          <Link to="" className="nav-anim ">
            Home
          </Link>
        </li>
        <li>
          <Link to="contact" className="nav-anim ">
            Contact
          </Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <Link to="shop" className="ShopBlueBtn nav-anim">
            Shop
          </Link>
        </li>
        <li>
          <Link to="cart" className="nav-anim ">
            <FaCartShopping size={22} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
