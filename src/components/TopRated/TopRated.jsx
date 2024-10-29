import { useEffect, useState } from "react";
import Item from "../Item/Item";
export default function TopRated() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=17f1ceadcf3767a35e55dd6204800668"
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <ul className="list">
      {data.map((el) => (
        <Item results={el.results} />
      ))}
    </ul>
  );
}
