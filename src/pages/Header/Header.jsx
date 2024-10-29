import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="list">
        <Link to={"/"}>Home</Link>
        <Link to={"/popular"}>Popular</Link>
        <Link to={"/toprated"}>TopRated</Link>
        <Link to={"/upcoming"}>UpComing</Link>
      </ul>
    </div>
  );
}
