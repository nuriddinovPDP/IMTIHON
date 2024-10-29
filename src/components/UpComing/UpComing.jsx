import { useActionData } from "react-router-dom";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
export default function UpComing() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=17f1ceadcf3767a35e55dd6204800668"
    )
      .then((response) => response.json())
      .then((json) => setData(json));
  });

  return (
    <ul className="list">
      {data?.map((el) => (
        <Item results={el.results} />
      ))}
    </ul>
  );
}
