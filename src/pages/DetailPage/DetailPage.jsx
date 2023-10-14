import "../../components/ListItem/ListItem.css";
import { useState, useEffect } from "react";
//RRD
import { useParams } from 'react-router-dom';
import axios from "axios";
//components
import CardItem from "../../components/CardItem/CardItem";

{/* ItemDetailConteiner */}
  
const DetailPage = () => {

    let { id } = useParams();
  const [product, setProduct] = useState([]);

  console.log(product)

  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data))
  }, [id]);

  return (
    <div className= "CardItem" style={{ display: "flex", justifyContent: "center", margin: 20 }}>
        {product.id ? <CardItem product={product} /> : null}
    </div>
  );
};

export default DetailPage;