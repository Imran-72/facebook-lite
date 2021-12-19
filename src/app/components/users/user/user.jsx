import React from "react";
import { useSelector } from "react-redux";
import { ProfileWrap } from "../../profile/profileWrap";
import img from "../../../../img/ava.png";

const User = () => {
  let user = useSelector((state) => state.profUserR.user);

  if (!user.name) {
    window.location.replace("http://localhost:3000/");
  }

  return (
    <ProfileWrap>
      <div className="d-flex m-2">
        <img
          src={user.photos.small === null ? img : user.photos.small}
          alt="avatar"
          width="300"
          height="300"
        />
        <div width="500">
          {user.name && <span>Имя: {user.name}</span>}
          {user.status && <span>Статус: {user.tatus}</span>}
        </div>
      </div>
    </ProfileWrap>
  );
};

export default User;
