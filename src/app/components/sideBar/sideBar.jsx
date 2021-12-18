import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../../redux/actions";
import { SideBarWrap } from "./sideBarWrap";

const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <SideBarWrap>
      <h1 style={{ margin: 0 }}>SideBar</h1>
      <h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <li>Message</li>
          <Link to="/users">
            <li onClick={() => dispatch(getUsers())}>Users</li>
          </Link>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </h3>
    </SideBarWrap>
  );
};

export default SideBar;
