import React from "react";
import "./App.css";
import Users from "./Users";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const url = `https://dummyjson.com/users?limit=20&skip=${count}`;
  return (
    <main>
      <section>
        <h1 className="main-title">User List</h1>
        <Users
          url={url}
          count={count}
          setCount={setCount}
          users={users}
          setUsers={setUsers}
        />
        <Button setUsers={setUsers} count={count} setCount={setCount}></Button>
      </section>
    </main>
  );
}

export default App;
