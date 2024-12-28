import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/players">Sign-up!</Link>
        </li>
      </ul>
    </div>
  );
}
