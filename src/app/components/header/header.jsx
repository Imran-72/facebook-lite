import React from "react";
import { useDispatch } from "react-redux";
import { HeaderWrap } from "./headerWrap";
import { logout } from "../../../redux/actions";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.authR);

  return (
    <HeaderWrap>
      <h1 style={{ margin: 0 }}>Facebook Lite</h1>
      <div className="mx-2">
        {isAuth ? (
          <div
            className="d-flex justify-content-end"
            role="button"
            onClick={() => dispatch(logout())}
          >
            Logout
          </div>
        ) : (
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <div className="d-flex justify-content-end" role="button">
              Login
            </div>
          </Link>
        )}
      </div>
    </HeaderWrap>
  );
};

export default Header;
