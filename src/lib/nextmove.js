const states = [
  [null, null, null, null, null, null, null, null, null, 4], //first move

  ["O", null, null, null, null, null, null, null, null, 4],
  [null, "O", null, null, null, null, null, null, null, 4],
  [null, null, "O", null, null, null, null, null, null, 4],
  [null, null, null, "O", null, null, null, null, null, 4],

  [null, null, null, null, "O", null, null, null, null, 0],

  [null, null, null, null, null, "O", null, null, null, 4],
  [null, null, null, null, null, null, "O", null, null, 4],
  [null, null, null, null, null, null, null, "O", null, 4],
  [null, null, null, null, null, null, null, null, "O", 4],

  [null, "O", null, null, "X", null, null, null, null, 0], //middle cases
  [null, null, null, "O", "X", null, null, null, null, 0],
  [null, null, null, null, "X", "O", null, null, null, 8],
  [null, null, null, null, "X", null, null, "O", null, 8],

  ["O", null, null, null, "X", null, null, null, null, 1], //diagonal cases
  [null, null, "O", null, "X", null, null, null, null, 1],
  [null, null, null, null, "X", null, "O", null, null, 7],
  [null, null, null, null, "X", null, null, null, "O", 7],

  ["O", null, null, null, "X", "O", null, null, null, 2], //drawing moves
  ["O", null, null, null, "X", null, null, "O", null, 6],
  ["O", null, null, null, "X", null, null, null, "O", 1],

  [null, null, "O", "O", "X", null, null, null, null, 0], //drawing moves
  [null, null, "O", null, "X", null, null, "O", null, 8],
  [null, null, "O", null, "X", null, "O", null, null, 1],

  [null, "O", null, null, "X", null, "O", null, null, 2], //drawing moves
  [null, null, null, null, "X", "O", "O", null, null, 6],
  [null, null, "O", null, "X", null, "O", null, null, 1],

  [null, "O", null, null, "X", null, null, null, "O", 0], //drawing moves
  [null, null, null, "O", "X", null, null, null, "O", 8],
  ["O", null, null, null, "X", null, null, null, "O", 1],

  ["X", "O", null, null, "X", null, null, null, "O", 3], //winning moves
  ["X", null, null, "O", "X", null, null, null, "O", 1],
  ["O", null, null, null, "X", "O", null, null, "X", 7],
  ["O", null, null, null, "X", null, null, "O", "X", 5],

  ["O", "X", null, null, "X", null, null, "O", null, 6], //drawing moves
  [null, "X", "O", null, "X", null, null, "O", null, 8],
  [null, "O", null, null, "X", null, "O", "X", null, 0],
  [null, "O", null, null, "X", null, null, "X", "O", 2],

  ["X", "O", null, "X", "X", "O", null, null, "O", 6], //winning moves
  ["X", "O", null, "X", "X", null, "O", null, "O", 5],

  ["X", "X", "O", "O", "X", null, null, null, "O", 7], //winning moves
  ["X", "X", null, "O", "X", null, null, "O", "O", 2],

  ["O", null, null, null, "X", "O", "O", "X", "X", 1], //winning moves
  ["O", "O", null, null, "X", "O", null, "O", "X", 6],

  ["O", null, "O", null, "X", "X", null, "O", "X", 3], //winning moves
  ["O", null, null, "O", "X", "X", null, "O", "X", 2],
];

const criticalStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const otherMove = (state) => {
  for (let s of criticalStates) {
    if (state[s[0]] === "X" && state[s[1]] === "X" && state[s[2]] === null) {
      return s[2];
    } else if (
      state[s[0]] === "X" &&
      state[s[1]] === null &&
      state[s[2]] === "X"
    ) {
      return s[1];
    } else if (
      state[s[0]] === null &&
      state[s[1]] === "X" &&
      state[s[2]] === "X"
    ) {
      return s[0];
    }
  }

  for (let s of criticalStates) {
    if (state[s[0]] === "O" && state[s[1]] === "O" && state[s[2]] === null) {
      return s[2];
    } else if (
      state[s[0]] === "O" &&
      state[s[1]] === null &&
      state[s[2]] === "O"
    ) {
      return s[1];
    } else if (
      state[s[0]] === null &&
      state[s[1]] === "O" &&
      state[s[2]] === "O"
    ) {
      return s[0];
    }
  }

  for (let i = 0; i < 9; i++) {
    if (state[i] === null) {
      return i;
    }
  }

  return -1;
};

const nextMove = (state) => {
  for (let s of states) {
    if (state.every((value, index) => value === s[index])) {
      return s[9];
    }
  }

  return otherMove(state);
};

export default nextMove;
