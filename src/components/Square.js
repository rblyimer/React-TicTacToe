import React from "react";

const style = {
  background: "cyan",
  border: "2px solid white",
  fontSize: "30px",
  fontWeight: "800",
  color: "black",
  cursor: "pointer",
  outline: "none",
};

function Square(props) {
  const { value, onClick } = props;
  return (
    <button style={style} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;