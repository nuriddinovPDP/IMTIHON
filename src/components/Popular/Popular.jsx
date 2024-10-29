import { useEffect, useState } from "react";
import Item from "../Item/Item";

export default function Popular() {
  const [data, setData] = useState([]);

  const getPopular = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=17f1ceadcf3767a35e55dd6204800668"
    );
    let data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getPopular();
  }, []);

  //   useEffect(() => {
  //     fetch(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=17f1ceadcf3767a35e55dd6204800668"
  //     )
  //       .then((response) => response.json())
  //       .then((json) => setData(json));
  //   }, []);

  return (
    <ul className="list">
      {data.map((el) => (
        <Item results={el.results} />
      ))}
    </ul>
  );
}
