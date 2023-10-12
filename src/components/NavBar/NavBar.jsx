import "./NavBar.css";
import logo from "../../assets/logo1.png";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-container">
      <Link to="/">
        <img src={logo} alt="Logo TOKIO" style={{width: "65px", margin: "5px 14px"}} />
      </Link>
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
        <Link className="li" to="/category/Indumentaria">
          Indumentaria
        </Link>
        <Link className="li" to="/category/Accesorios">
          Accesorios
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;