 // La lista de categorías disponible en DummyJSON inlcuye 
  /*"smartphones", "fragrances", "skincare", y "groceries" entre otras*/

import React from "react";
import { useParams } from 'react-router-dom';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import LinearProgress from '@mui/material/LinearProgress';

//components
import CardItem from "../../components/CardItem/CardItem";
//Hooks
import useAxios from "../../hooks/useAxios";

const CategoryPage = () => {
  const url = "https://dummyjson.com/products";
  const { data: allProducts, loading } = useAxios(url);

  const { categoryId } = useParams();


  if (loading) {
    return <LinearProgress/>
  }

  if (!allProducts) {
    return  <p style={{margin: 20}}>No hay productos disponibles en este momento <SentimentVeryDissatisfiedIcon/></p>;
  }

  const filteredProducts = allProducts.filter((product) => product.category === categoryId);

  return (
    <div className="Card-List">
      {filteredProducts.map((product) => (
        <div style={{ margin: 10 }} key={product.id} className="CardItem">
          <CardItem product={product} />
        </div>
      ))}
    </div>
  );
}

export default CategoryPage;
