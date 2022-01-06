import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../../../img/ava.png";
// import { follow } from "../../../../redux/actions";

const User = ({ photo, name, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Link to={`/userProfile/${id}`}>
        <div className="m-3">
          <img src={photo === null ? img : photo} alt="avatar" width="70" />
          <p>Имя: {name}</p>
        </div>
      </Link>
      <div>
        <button
          className="btn btn-primary mb-2"
          // onClick={() => dispatch(follow(id))}
        >
          FOLLOW
        </button>
      </div>
    </>
  );
};

export default User;
