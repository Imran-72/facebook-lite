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
            width="300"
            height="300"
            className="img-responsive rounded-circle"
          />
          <ul style={{ listStyleType: "none" }}>
            <li>{myProfile.fullName}</li>
            <li>22 года</li>
          </ul>
        </div>
        <div>
          <ProfileStatus status={status} />
        </div>
      </>
    </ProfileWrap>
  );
};

export default Profile;
