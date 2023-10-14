import "./NavBar.css";
import { Link } from "react-router-dom";
//assets
import logo from "../../assets/logo1.png";
//components
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="nav-container">
      <Link to="/">
        <img src={logo} alt="Logo TOKIO" style={{width: "65px", margin: "5px 14px"}} />
      </Link>
      <nav>
      <ul className="nav-ul">
        <Link className="brand" to="/">
          TOKIO
        </Link>
        <Link className="li" to="/">
          Incio
        </Link>
        <Link className="li" to="/contact">
          Contacto
        </Link>
        <Link className="li" to="/category/smartphones">
          Smartphones
        </Link>
        <Link className="li" to="/category/fragrances">
          Fragancias
        </Link>
        <Link className="li" to="/category/skincare">
          SkinCare
        </Link>
        <Link className="li" to="/category/groceries">
          Comestibles
        </Link>
        <Link className="li">
           <CartWidget/> 
        </Link>
      </ul>
    </nav>
    </div>

  );
};

export default NavBar;