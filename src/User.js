import React from "react";
import { useEffect } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import Characteristics from "./Characteristics";

const User = ({ url, users, setUsers }) => {
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((userdata) => setUsers(userdata.users));
  }, [setUsers, url]);

  const removeItem = (id) => {
    const newUser = users.filter((user) => user.id !== id);
    return setUsers(newUser);
  };

  return (
    <div className="user-container">
      {users.map((user) => {
        return (
          <div className="user" key={user.id}>
            <section className="user-section">
              <img className="user-img" src={user.image} alt={user.username} />
              <article className="user-details">
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
            <button
              className="user-remove-btn"
              onClick={() => removeItem(user.id)}
            >
              <FaRegTimesCircle />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default User;
