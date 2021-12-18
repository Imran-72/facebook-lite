import * as axios from "axios";
import React, { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState();

  console.log("users", users);
  const getUsers = async () => {
    const response = await axios(
      "https://social-network.samuraijs.com/api/1.0/users?page=1&count=10"
    );
    const data = await response.data;
    setUsers(data.items);
  };
  return (
    <>
      {users &&
        users.map((item) => {
          return (
            <div style={{ display: "block" }}>
              <img
                src={
                  item.photos.small == null
                    ? "https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg"
                    : item.photos.small
                }
                alt="avatar"
                width="100"
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      <div>
        <button onClick={getUsers}>Get Users</button>
      </div>
    </>
  );
};

export default Users;
