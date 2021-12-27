import React from "react";
import { Link } from "react-router-dom";
import img from "../../../../img/ava.png";

const User = ({ photo, name, id }) => {
  return (
    <>
      <Link to={`/userProfile/${id}`}>
        <div className="m-3">
          <img src={photo === null ? img : photo} alt="avatar" width="70" />
          <p>Имя: {name}</p>
        </div>
      </Link>
    </>
  );
};

export default User;
