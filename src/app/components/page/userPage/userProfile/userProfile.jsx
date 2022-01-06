import React from "react";
import { useSelector } from "react-redux";
import { ProfileWrap } from "../../../profile/profileWrap";
import img from "../../../../../img/ava.png";

const UserProfile = () => {
  const {
    name,
    photos: ava,
    status,
  } = useSelector((state) => state.profUserR.user);

  return (
    <>
      <ProfileWrap>
        <div className="d-flex m-2">
          <img
            src={ava.large ? ava.large : img}
            alt="avatar"
            width="300"
            height="300"
          />
          <ul style={{ listStyleType: "none" }}>
            <li>
              <b>Имя:</b> {name}
            </li>
            <li>
              <b>Статус:</b> {status ? status : "Нет статуса"}
            </li>
          </ul>
        </div>
      </ProfileWrap>
    </>
  );
};

export default UserProfile;
