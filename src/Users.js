import React from "react";
import User from "./User";
const Users = ({ url, users, setUsers }) => {
  return <User url={url} users={users} setUsers={setUsers}></User>;
};

export default Users;
