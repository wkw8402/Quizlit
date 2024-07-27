import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">Quizlit (Quizlet from Temu)
        </Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className="link">
          Add item
        </Link>
        <Link to="/create_day" className="link">
          Add day
        </Link>
      </div>
    </div>
  );
}
