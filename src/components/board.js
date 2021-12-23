import Box from "./box";
import Result from "./result";
import nextMove from "../lib/nextmove";
import checkWinner from "../lib/checkWinner";
import { useState } from "react";

const Board = ({ defaultState }) => {
  const [state, setState] = useState([...defaultState]);
  const [winner, setWinner] = useState("__");

  const handleClick = (i) => {
    if (state.every((value, index) => value !== null)) {
      alert("Start the game again.");
      return;
    }

    state[i] = "O";
    let x = nextMove(state);

    if (x !== -1) {
      state[x] = "X";
    }

    let w = checkWinner(state);
    setState([...state]);
    setWinner(w);
  };

  const start = () => {
    setState([...defaultState]);
    setWinner("__");
  };

  return (
    <div className="game">
      <div className="board">
        <div className="row">
          <Box i={0} state={state[0]} handleClick={handleClick} />
          <Box i={1} state={state[1]} handleClick={handleClick} />
          <Box i={2} state={state[2]} handleClick={handleClick} />
        </div>
        <div className="row">
          <Box i={3} state={state[3]} handleClick={handleClick} />
          <Box i={4} state={state[4]} handleClick={handleClick} />
          <Box i={5} state={state[5]} handleClick={handleClick} />
        </div>
        <div className="row">
          <Box i={6} state={state[6]} handleClick={handleClick} />
          <Box i={7} state={state[7]} handleClick={handleClick} />
          <Box i={8} state={state[8]} handleClick={handleClick} />
        </div>
      </div>
      <button className="start" onClick={start}>
        Start
      </button>
      <Result result={winner} />
    </div>
  );
};

export default Board;
