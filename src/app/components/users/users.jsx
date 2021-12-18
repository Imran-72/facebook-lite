import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers } from "../../../redux/actions";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersR.users);

  const handleGetUsers = () => {
    return dispatch(getUsers());
  };

  return (
    <>
      {users &&
        users.map((item) => {
          return (
            <div style={{ display: "block" }}>
              <img
                src={
                  item.photos.small === null
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
        <button onClick={handleGetUsers}>Get Users</button>
      </div>
    </>
  );
};

export default Users;
