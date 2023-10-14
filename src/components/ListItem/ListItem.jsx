import "./ListItem.css";
import { Link } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress';

//components
import CardItem from "../CardItem/CardItem";
//Hooks
import useAxios from "../../hooks/useAxios";



const ListItem = () => {
  const url = "https://dummyjson.com/products";
  const {data, loading} = useAxios(url);

  if (loading) return <LinearProgress/>

  return (
    <div className="Card-List">
      {data 
      ?  data.map((product) => {
          return (
            <div key={product.id} className= "CardItem"> 
               <Link to={`/detail/${product.id}`}>
                <CardItem  product={product} />
              </Link>
            </div>);
        })

           : null} 
    </div>
  );
};

export default ListItem;