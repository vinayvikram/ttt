import Board from "../components/board";
import { Link } from "react-router-dom";

const FirstModeGame = () => {
  return (
    <div className="container">
      <div className="modes">
        <Link to="/">
          <button className="button">First Player Mode</button>
        </Link>
        <Link to="/1">
          <button className="button">Second Player Mode</button>
        </Link>
      </div>
      <Board
        defaultState={[null, null, null, null, null, null, null, null, null]}
      />
    </div>
  );
};

const SecondModeGame = () => {
  return (
    <div className="container">
      <div className="modes">
        <Link to="/">
          <button className="button">First Player Mode</button>
        </Link>
        <Link to="/1">
          <button className="button">Second Player Mode</button>
        </Link>
      </div>
      <Board
        defaultState={[null, null, null, null, "X", null, null, null, null]}
      />
    </div>
  );
};

export { FirstModeGame, SecondModeGame };
