import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

const Button = ({ count, setCount, setUsers }) => {
  const setCountToPrevious = () => {
    if (count !== 0) {
      setCount(count - 20);
    }
  };
  return (
    <div className="btn-wrap">
      <button className="btn" onClick={() => setCountToPrevious()}>
        <GrPrevious />
      </button>
      <button className="btn" onClick={() => setUsers([])}>
        Clear all
      </button>
      <button className="btn" onClick={() => setCount(count + 20)}>
        <GrNext />
      </button>
    </div>
  );
};
export default Button;
