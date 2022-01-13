import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import NavProfile from "../navBar/navProfile";
import { NavBarWrap } from "./navBarWrap";

const NavBar = () => {
  const { isAuth } = useSelector((state) => state.authR);
  const history = useHistory();
  console.log(history);

  return (
    <NavBarWrap>
      <div className="navbar bg-light mb-3">
        <div className="container-fluid">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                company
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/users">
                users
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            {isAuth ? (
              <NavProfile />
            ) : (
              <Link className="nav-link " aria-current="page" to="/login">
                login
              </Link>
            )}
          </div>
        </div>
      </div>
    </NavBarWrap>
  );
};

export default NavBar;
