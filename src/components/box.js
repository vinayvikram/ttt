const Box = ({ state, i, handleClick }) => {
  const clicked = () => {
    if (state === null) {
      handleClick(i);
    }
  };

  return (
    <div className="box" onClick={clicked}>
      {state}
    </div>
  );
};

export default Box;
