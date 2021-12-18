import React from "react";
import { Link } from "react-router-dom";
import { S_SideBar } from "./s_sideBar";

const SideBar = () => {
  return (
    <S_SideBar>
      <h1 style={{ margin: 0 }}>SideBar</h1>
      <h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <Link to="/profile">
            <li>Profile</li>
          </Link>
          <li>Message</li>
          <Link to="/users">
            <li>Users</li>
          </Link>
          <li>Music</li>
          <li>Settings</li>
        </ul>
      </h3>
    </S_SideBar>
  );
};

export default SideBar;
