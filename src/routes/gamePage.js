import Board from "../components/board";

const states = [
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "X", null, null, null, null],
];

const GamePage = ({ mode }) => {
  return <Board defaultState={states[mode]} />;
};

export default GamePage;
