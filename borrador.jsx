
/*
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardUser from "../../components/CardItem/CardItem";

const Category = () => {
  const [chars, setChars] = useState([]);

  let { categoryId } = useParams();

  console.log(categoryId);

  // filtremos solamente los personajes que coincidan con el categoryId
  // que nos llega por paramentro

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character").then((res) =>
      setChars(res.data.results)
    );
  }, []);

  let filteredCharacters = chars.filter((char) => {
    return char.species === categoryId;
  });

  return (
    <div className="Cards-List">
      {filteredCharacters.map((char) => {
        return (
          <div style={{ margin: 10 }} key={char.id}>
            <CardUser char={char} />
          </div>
        );
      })}
    </div>
  );
};

export default Category;
*/
