import React from "react";
import { useState, useEffect } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import Characteristics from "./Characteristics";

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
      <div className="user-container">
        {users.map((user) => {
          return (
            <div className="user-item" key={user.id}>
              <section>
                <img src={user.image} alt={user.username} />
                <article>
                  <h4>{user.firstName}</h4>
                  <p>
                    {user.address.city}, {user.address.state}
                  </p>
                </article>
              </section>
              <Characteristics
                height={user.height}
                weight={user.weight}
                eyeColor={user.eyeColor}
                bloodGroup={user.bloodGroup}
              />
              <button onClick={() => removeItem(user.id)}>
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
