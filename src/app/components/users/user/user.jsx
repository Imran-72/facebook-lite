import React from "react";
import { useSelector } from "react-redux";
import { ProfileWrap } from "../../profile/profileWrap";
import img from "../../../../img/ava.png";
import { useParams } from "react-router-dom";

const User = () => {
  let user = useSelector((state) => state.profUserR.user);

  if (!user.name) {
    window.location.replace("http://localhost:3000/");
  }

  const params = useParams();
  console.log(params.userId);

  return (
    <ProfileWrap>
      <div className="d-flex m-2">
        <img
          src={user.photos.large === null ? img : user.photos.large}
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
