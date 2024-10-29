import { useState } from "react";
import "./Item.css";

export default function Item({ results }) {
  return (
    <li>
      {/* <img src={results.map()} alt="" /> */}
      <p className="text">{results.map((el) => el.original_title)}</p>
    </li>
  );
}
