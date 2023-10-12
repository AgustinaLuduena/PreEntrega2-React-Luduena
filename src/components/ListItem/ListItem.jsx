import "./ListItem.css";
import { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "../CardItem/CardItem";
import { Link } from "react-router-dom";

const ListItem = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
  })
  return (
    <div className="Card-List">
      {products.map((product) => {
          return (
            <div key={product.id}> 
               <Link to={`/detail/${product.id}`}>
                <CardItem  product={product} />;
              </Link>;
          </div>
          );
      })}
    </div>
  );
};

export default ListItem;