import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../../../../redux/actions";

const NavProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpen, setOpen] = useState();

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="dropdown" onClick={toggleMenu}>
      <div className="btn dropdown-toggle d-flex align-items-center">
        <div className="me-2">user</div>
        <img
          src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
            .toString(36)
            .substring(7)}.svg`}
          alt=""
          height="40"
          className="img-responsive rounded-circle"
        />
      </div>
      <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
        <Link to="/profile" className="dropdown-item">
          profile
        </Link>
        <div onClick={() => dispatch(logout())}>
          <Link
            onClick={() => history.replace("/login")}
            className="dropdown-item"
          >
            log out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
