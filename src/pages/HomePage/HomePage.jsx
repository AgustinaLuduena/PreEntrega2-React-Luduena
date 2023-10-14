import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ProductList from "../../components/ListItem/ListItem";

const HomePage = () => {
  return (
    <div>
      <h1 className="encabezado">NUESTROS PRODUCTOS</h1>

      {/* ItemListConteiner === ProductList*/}
      <ProductList />

      <div>
          <h2 className="encabezado">¡Recorré nuestra web!</h2>
      </div>

      <div className="buttonsConteiner">
      <Link className="li" to="/category/smartphones">
          <Button variant="contained">Smartphones</Button> 
        </Link>
        <Link className="li" to="/category/fragrances">
          <Button variant="contained">Fragancias</Button>  
        </Link>
        <Link className="li" to="/category/skincare">
          <Button variant="contained">SkinCare</Button> 
        </Link>
        <Link className="li" to="/category/groceries">
          <Button variant="contained">Comestibles</Button> 
        </Link>
      </div>

    </div>
  );
};

export default HomePage;