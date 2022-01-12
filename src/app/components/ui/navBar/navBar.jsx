import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SideBarWrap } from "./sideBarWrap";

const NavBar = () => {
  const { isAuth } = useSelector((state) => state.authR);
  return (
    <SideBarWrap>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <Link to={!isAuth ? "/login" : "/profile"}>
          <li>Profile</li>
        </Link>
        <li>Message</li>
        <Link to="/users">
          <li>Users</li>
        </Link>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </SideBarWrap>
  );
};

export default NavBar;
