import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="startpage">
      <input className="name-box" placeholder="Enter your name..." />
      <Link to="/play/0">
        <button className="button">Play as a first player.</button>
      </Link>
      <Link to="/play/1">
        <button className="button">Play as a second player.</button>
      </Link>
    </div>
  );
};

export default StartPage;
