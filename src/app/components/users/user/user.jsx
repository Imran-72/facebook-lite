import React from "react";
import { useSelector } from "react-redux";
import { ProfileWrap } from "../../profile/profileWrap";
import img from "../../../../img/ava.png";

const User = () => {
  const { name, status, photos } = useSelector((state) => state.profUserR.user);
  return (
    <ProfileWrap>
      <div className="d-flex m-2">
        <img
          src={photos.small === null ? img : photos.small}
          alt="avatar"
          width="300"
          height="300"
        />
        <div width="500">
          {name && <span>Имя: {name}</span>}
          {status && <span>Статус: {status}</span>}
        </div>
      </div>
    </ProfileWrap>
  );
};

export default User;
