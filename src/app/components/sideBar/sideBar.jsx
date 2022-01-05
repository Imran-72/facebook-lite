import React from "react";
import { Link } from "react-router-dom";
import { SideBarWrap } from "./sideBarWrap";

const SideBar = () => {
  return (
    <SideBarWrap>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
        <li>Message</li>
        <Link to="/users">
          <li>Users</li>
        </Link>
        <Link to="/login">
          <li>RegisterForm</li>
        </Link>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </SideBarWrap>
  );
};

export default SideBar;
