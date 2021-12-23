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
      return state[line[0]];
    }
  }

  return "__";
};

export default checkWinner;
