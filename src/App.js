import React from "react";
import "./App.css";
import Users from "./Users";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";

function App() {
  const [count, setCount] = useState(0);
  const url = `https://dummyjson.com/users?limit=20&skip=${count}`;
  const setCountToPrevious = () => {
    if (count !== 0) {
      setCount(count - 20);
    } else {
      console.log("zero");
    }
  };
  return (
    <main>
      <section>
        <h1>User List</h1>
        <Users url={url} changePage={count} />
        <div className="btn-wrap">
          <button className="btn" onClick={() => setCountToPrevious()}>
            <GrPrevious />
          </button>
          <button className="btn" onClick={() => setCount(count + 20)}>
            <GrNext />
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
