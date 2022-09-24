import React from "react";
import { useState, useEffect } from "react";
import { FaRegTimesCircle } from "react-icons/fa";

const Users = ({ url }) => {
  const [users, setUsers] = useState([]);
  // const [count, setCount] = useState(0);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((userdata) => setUsers(userdata.users));
  }, [url]);
  const removeItem = (id) => {
    let newUser = users.filter((user) => user.id !== id);
    return setUsers(newUser);
  };
  return (
    <>
      <div className="grid-container">
        {users.map((user) => {
          return (
            <div className="grid-item" key={user.id}>
              <img className="user-img" src={user.image} alt={user.username} />
              <div>
                {user.firstName} {user.lastName}
              </div>
              <div>{user.email}</div>
              <button
                className="btn-delete"
                onClick={() => removeItem(user.id)}
              >
                <FaRegTimesCircle />
              </button>
            </div>
          );
        })}
      </div>
      <button className="btn" onClick={() => setUsers([])}>
        Clear all
      </button>
      {/* <button className="btn" onClick={() => setCount(count + 20)}>
        Next page
      </button> */}
    </>
  );
};

export default Users;
