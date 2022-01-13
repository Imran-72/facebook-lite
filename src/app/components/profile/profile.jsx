import React from "react";
import { ProfileWrap } from "./profileWrap";
import ProfileStatus from "./profileStatus/profileStatus";

const Profile = ({ myProfile, status }) => {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6 offset-md-3 shadow p-4"
          style={{ marginTop: "150px" }}
        >
          <div className="d-flex">
            <div>
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
              <div className="mt-3 mx-4">
                <ProfileStatus status={status} />
              </div>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
