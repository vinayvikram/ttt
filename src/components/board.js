import Box from "./box";
import Result from "./result";
import nextMove from "../lib/nextmove";
import { useState } from "react";

const checkWinner = (state) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    let check =
      state[line[0]] !== null &&
      state[line[0]] === state[line[1]] &&
      state[line[1]] === state[line[2]];

    if (check) {
      result = `Player ${state[line[0]]} won the game.`;
    }
  }
};

var result = "Playing...";

const Board = ({ defaultState }) => {
  const [state, setState] = useState(defaultState.slice());

  const handleClick = (i) => {
    if (result !== "Playing...") {
      alert("Start the game again.");
      return;
    }

    state[i] = "O";
    let x = nextMove(state);
    state[x] = "X";
    setState(state.slice());
    checkWinner(state);
    if (x === -1) {
      result = `The match is drawn`;
    }
  };

  const start = () => {
    setState(defaultState.slice());
    result = "Playing...";
  };
  return (
    <div>
      <div className="start" onClick={start}>
        Start
      </div>
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
      <Result result={result} />
    </div>
  );
};

export default Board;
