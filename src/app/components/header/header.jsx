import React from "react";
import { useDispatch } from "react-redux";
import { HeaderWrap } from "./headerWrap";
import { login, logout } from "../../../redux/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.authR);
  return (
    <HeaderWrap>
      <h1 style={{ margin: 0 }}>Facebook Lite</h1>
      <Link
        to="/login"
        style={{ textDecoration: "none", color: "white", padding: 0 }}
      >
        {isAuth ? (
          <div
            className="d-flex justify-content-end"
            role="button"
            onClick={() => dispatch(logout())}
          >
            logout
          </div>
        ) : (
          <div
            className="d-flex justify-content-end"
            role="button"
            onClick={() => dispatch(login())}
          >
            login
          </div>
        )}
      </Link>
    </HeaderWrap>
  );
};

export default Header;
