import React from "react";
import { useSelector } from "react-redux";
import { UsersWrap } from "./usersWrap";
import img from "../../../img/ava.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/actions";
const Users = () => {
  const users = useSelector((state) => state.usersR.users);
  const dispatch = useDispatch();

  return (
    <>
      <UsersWrap>
        {users &&
          users.map((item) => {
            return (
              <Link
                to={`/users/user/${item.id}`}
                onClick={() => dispatch(setUser(item))}
              >
                <div>
                  <img
                    src={item.photos.small === null ? img : item.photos.small}
                    alt="avatar"
                    width="70"
                  />
                  <p>{item.name}</p>
                </div>
              </Link>
            );
          })}
      </UsersWrap>
    </>
  );
};

export default Users;
