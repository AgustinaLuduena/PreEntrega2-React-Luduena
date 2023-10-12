import React from "react";


import ProductList from "../../components/ListItem/ListItem";

const HomePage = () => {
  return (
    <div>
      <h1 className="firstLine">¡Recorré nuestra web!</h1>
      <ProductList />
    </div>
  );
};

export default HomePage;