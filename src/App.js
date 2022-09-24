import React from "react";
import "./App.css";
import Users from "./Users";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const url = `https://dummyjson.com/users?limit=20&skip=${count}`;
  return (
    <div className="App">
      <Users className="item" url={url} changePage={count} />
      <button className="btn" onClick={() => setCount(count + 20)}>
        Next page
      </button>
    </div>
  );
}

export default App;
