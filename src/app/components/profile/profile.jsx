import React from "react";
import ProfileStatus from "./profileStatus/profileStatus";

const Profile = ({ myProfile, status }) => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-8 offset-md-2 shadow p-4"
          style={{ marginTop: "100px" }}
        >
          <div className="d-flex">
            <img
              src={`https://avatars.dicebear.com/api/avataaars/${(
                Math.random() + 1
              )
                .toString(36)
                .substring(7)}.svg`}
              alt="avatar"
              width="150"
              height="150"
              className="img-responsive"
            />
            <h4 className="mx-5">{myProfile.fullName}</h4>
            <span className="mx-5">
              <button className="btn btn-primary">Редактировать профиль</button>
            </span>
          </div>
        </div>
      </div>
      <ProfileStatus status={status} />
    </div>
  );
};

export default Profile;
