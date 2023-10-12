
import { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "../../components/CardItem/CardItem";


const DetailPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
  })
  return (
    <div className="Card-List">
      <h1>Detail page</h1>
    </div>
  );
};

export default DetailPage;