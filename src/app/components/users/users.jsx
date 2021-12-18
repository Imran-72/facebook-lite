import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState();

  console.log("users", users);
  const getUsers = async () => {
    const response = await fetch(
      "https://social-network.samuraijs.com/api/1.0/users?page=1&count=10"
    );
    const json = await response.json();
    setUsers(json);
  };
  return (
    <>
      {users &&
        users.map((item) => {
          return (
            <ul>
              <li>{item}</li>
            </ul>
          );
        })}
      <div>
        <button onClick={getUsers}>Get Users</button>
      </div>
    </>
  );
};

export default Users;
