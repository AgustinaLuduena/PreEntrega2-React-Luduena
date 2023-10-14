import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect (() => {
    setLoading(true);
    axios(url)
    .then((res) => setData(res.data.products));
    setTimeout(()=> {
        setLoading(false);
    }, 500);
    
  }, [url]);

  return {data, loading};

};

export default useAxios;
