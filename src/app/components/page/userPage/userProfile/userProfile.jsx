import React from "react";
import { useSelector } from "react-redux";
import { ProfileWrap } from "../../../profile/profileWrap";

const UserProfile = () => {
  const { name, status } = useSelector((state) => state.profUserR.user);

  return (
    <>
      <ProfileWrap>
        <div className="d-flex m-2">
          <img
            // src={ava.large ? ava.large : img}
            src={`https://avatars.dicebear.com/api/avataaars/${(
              Math.random() + 1
            )
              .toString(36)
              .substring(7)}.svg`}
            alt=""
            className="img-responsive rounded-circle"
            alt="avatar"
            width="300"
            height="300"
          />
          <ul style={{ listStyleType: "none" }}>
            <li>
              <b> {name}</b>
            </li>
          </ul>
        </div>
        <div>
          <b> {status ? status : "Нет статуса"}</b>
        </div>
      </ProfileWrap>
    </>
  );
};

export default UserProfile;
