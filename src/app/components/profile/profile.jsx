import React from "react";
import { ProfileWrap } from "./profileWrap";
import ProfileStatus from "./profileStatus/profileStatus";

const Profile = ({ myProfile, status }) => {
  return (
    <ProfileWrap>
      <>
        <div className="d-flex m-2">
          <img
            src={`https://avatars.dicebear.com/api/avataaars/${(
              Math.random() + 1
            )
              .toString(36)
              .substring(7)}.svg`}
            alt="avatar"
            width="150"
            height="150"
            className="img-responsive rounded-circle"
          />
          <div className="d-flex">
            <span className="mx-5">
              <h4>{myProfile.fullName}</h4>
            </span>
            <span>
              <button className="btn btn-primary mx-5">
                Редактировать профиль
              </button>
            </span>
          </div>
        </div>
        <div>
          <ProfileStatus status={status} />
        </div>
      </>
    </ProfileWrap>
  );
};

export default Profile;
